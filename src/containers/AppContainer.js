import React, { Component } from 'react'
import { showModal, hideModal } from '../actions/modals'
import { connect } from 'react-redux'
import { NewsContainer, ModalContainer } from 'containers'
import { TopBar } from 'components'

class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.openUsersListModal = this.openUsersListModal.bind(this)
    this.openNewUserModal = this.openNewUserModal.bind(this)
  }

  componentDidMount () {
    if (!this.props.users.loggedInUser.id) {
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
    return (
      <React.Fragment>
        <TopBar />
        <NewsContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
