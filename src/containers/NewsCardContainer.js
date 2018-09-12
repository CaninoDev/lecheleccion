import React, { Component } from 'react'
import { showModal, hideModal } from '../actions/modals'
import { connect } from 'react-redux'
import { postVote } from '../actions/votes'
import { NewsCard } from 'components'

class NewsCardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isRead: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.openArticleModal = this.openArticleModal.bind(this)
    this.voteAndCloseModal = this.voteAndCloseModal.bind(this)
  }

  closeModal = () => {
    this.props.hideModal()
  }
  voteAndCloseModal = (vote) => {
    this.props.hideModal()
    const userID = this.props.user.id
    const articleID = this.props.articleData.id
    const { postVote } = this.props
    postVote(articleID, userID, vote)
  }
  openArticleModal = e => {
    const { showModal, articleData } = this.props
    showModal({
      isOpen: true,
      title: articleData.title,
      url: articleData.url,
      body: articleData.body,
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
  postVote: (articleID, userID, vote) => dispatch(postVote(articleID, userID, vote))
})

const mapStateToProps = state => ({
  user: state.users.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsCardContainer)
