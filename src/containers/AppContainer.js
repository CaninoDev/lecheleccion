import React, { Component } from 'react'
import { showModal, hideModal } from '../actions/modals'
import { connect } from 'react-redux'
import { NewsContainer, ChartsContainer, HeaderContainer, ModalContainer } from 'containers'
import { withStyles } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Switch from '@material-ui/core/Switch'
import Assessment from '@material-ui/icons/Assessment'
import ViewModule from '@material-ui/icons/ViewModule'

const styles = themes => ({
  container: {
    marginTop: '20px',
    marginLeft: '20px',
    alignContent: 'center'
  },

  header: {
    alignItems: 'center',
    direction: 'column',
    justify: 'center'
  }
})

class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newsWindow: true
    }
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

  toggleMainWindow = name => event => {
    this.setState({
      [name]: event.target.checked
    })
  }

  render () {
    const { classes } = this.props
    const { newsWindow } = this.state
    let window = (function () {
      if (newsWindow) {
        return <NewsContainer />
      } else {
        return <ChartsContainer />
      }
    })()

    return (
      <React.Fragment>
        <Grid container className={classes.container}>
          <Grid item xs>
            <Grid container spacing={16} direction='column' className={classes.header}>
              <HeaderContainer />
              <Switch
                checked={newsWindow}
                onChange={this.toggleMainWindow('newsWindow')}
                icon={<Assessment />}
                checkedIcon={<ViewModule />}
                value
              />
            </Grid>
          </Grid>
          <Grid item xs={9}>
            {window}
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
