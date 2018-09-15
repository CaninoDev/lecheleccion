import React, { Component } from 'react'
import { showModal, hideModal } from '../actions/modals'
import { connect } from 'react-redux'
import { NewsContainer, ChartsContainer, HeaderContainer, ModalContainer } from 'containers'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

const styles = themes => ({
  container: {
    marginTop: '20px',
    marginLeft: '20px',
    alignContent: 'center'
  },

  header: {
    alignItems: 'left',
    marginLeft: '3%',
    marginTop: '5%',
    direction: 'column',
    position: 'fixed'
  }
})

class AppContainer extends Component {
  constructor (props) {
    super(props)

    this.closeModal = this.closeModal.bind(this)
    this.openUsersListModal = this.openUsersListModal.bind(this)
    this.openNewUserModal = this.openNewUserModal.bind(this)
  }

  componentDidMount () {
    if (!this.props.users.currentUser.id) {
      this.openUsersListModal()
    }
  }

  closeModal = event => {
    this.props.hideModal()
  }

  openUsersListModal = () => {
    this.props.showModal({
      open: true,
      closeModal: this.closeModal,
      newUserModal: this.openNewUserModal
    }, 'userslist')
  }

  openNewUserModal = () => {
    this.props.showModal({
      open: true,
      closeModal: this.closeModal
    }, 'newuser')
  }

  render () {
    const { classes } = this.props

    return (
      <React.Fragment>
        <Grid container className={classes.container}>
          <Grid item xs position='relative'>
            <Grid container spacing={16} direction='column' className={classes.header}>
              <HeaderContainer />
              <ChartsContainer />
            </Grid>
          </Grid>
          <NewsContainer />
        </Grid>
        <ModalContainer />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => (
    dispatch(showModal({ modalProps, modalType }))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AppContainer))
