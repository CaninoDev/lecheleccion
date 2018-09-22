/* Credit to Esther Falayi github.com@efalayi  */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { default as modalTypes } from 'components/modals'

const MODAL_TYPES = {
  'article': modalTypes.ArticleModal,
  'newuser': modalTypes.NewUserModal,
  'userslist': modalTypes.UsersListModal
}

class ModalContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.closeModal = this.closeModal.bind(this)
  }
  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.modalProps !== prevState.modalProps) {
      return { modalIsOpen: nextProps.modalProps.open }
    } else return null
  }
  componentDidUpdate (prevProps, prevState, snapshot) {
    if (prevProps.modalProps !== this.props.modalProps) {
      this.setState({modalIsOpen: this.props.modalProps.open})
    }
  }
  closeModal () {
    this.setState({ modalIsOpen: false })
  }

  render () {
    if (!this.props.modalType) { return null }

    const SpecifiedModal = MODAL_TYPES[this.props.modalType]

    return (
      <div>
        <SpecifiedModal
          isOpen={this.state.modalIsOpen}
          closeModal={this.closeModal}
          {...this.props.modalProps}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.modals
})
export default connect(mapStateToProps, null)(ModalContainer)
