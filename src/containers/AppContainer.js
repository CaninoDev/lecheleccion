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
    alignContents: 'center',
    direction: 'column',
    position: 'fixed',
    marginLeft: '50px',
    spacing: 16
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

  closeModal = () => {
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
            <Grid container item xs direction='column' className={classes.header}>
              <HeaderContainer />
              <ChartsContainer />
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <NewsContainer />
          </Grid>
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
