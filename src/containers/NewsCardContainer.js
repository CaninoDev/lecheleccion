import React, { Component } from 'react'
import { showModal, hideModal } from '../actions/modals'
import { connect } from 'react-redux'
import { postVote } from '../actions/votes'
import { removeNewsCard } from '../actions/news'
import { updateBiasState } from '../actions/biases'
import { NewsCard } from 'components'

class NewsCardContainer extends Component {
  constructor (props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.openArticleModal = this.openArticleModal.bind(this)
    this.voteAndCloseModal = this.voteAndCloseModal.bind(this)
  }

  closeModal = () => {
    this.props.hideModal()
  }
  voteAndCloseModal = (vote = 0) => {
    this.props.hideModal()
    const userID = this.props.userID
    const articleID = this.props.articleData.id
    const { postVote, updateBiasState, removeNewsCard } = this.props
    postVote(articleID, userID, vote)
    updateBiasState(userID)
    removeNewsCard(articleID)
  }
  openArticleModal = e => {
    const { showModal, articleData } = this.props
    showModal({
      isOpen: true,
      title: articleData.title,
      url: articleData.url,
      body: articleData.body,
      source: articleData.source,
      voteAndCloseModal: this.voteAndCloseModal
    }, 'article')
    this.setState({
      isRead: true
    })
  }
  render () {
    const { articleData } = this.props

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    const jsDate = new Date(articleData.publication_date).toLocaleDateString('en-US', options)
    return (
      <NewsCard articleData={articleData} jsDate={jsDate} openArticleModal={this.openArticleModal} />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({
      modalProps,
      modalType
    }))
  },
  postVote: (articleID, userID, vote) => dispatch(postVote(articleID, userID, vote)),
  updateBiasState: (userId) => dispatch(updateBiasState(userId)),
  removeNewsCard: (articleID) => dispatch(removeNewsCard(articleID))
})

const mapStateToProps = state => ({
  userID: state.users.currentUser.id
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsCardContainer)
