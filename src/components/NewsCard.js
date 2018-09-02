import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ButtonBase from '@material-ui/core/ButtonBase'
import CardHeader from '@material-ui/core/CardHeader'
// import Grid from '@material-ui/core/Grid'
import { showModal, hideModal } from '../actions/modals'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import '../Cards.css'
const styles = {
  card: {
    flex: '0 1 24%',
    maxHeight: 200
  },
  media: {
    objectFit: 'cover'
  },
  headline: {
    fontFamily: 'Vidaloka'
  },
  cardButton: {
    display: 'block',
    textAlign: 'initial'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }

}
class NewsCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isRead: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.openArticleModal = this.openArticleModal.bind(this)
  }

  closeModal = vote => {
    this.attachArticle(vote)
    this.props.hideModal()
  }
  attachArticle = async vote => {
    const { dataSet, user } = this.props
    const articleID = dataSet.id
    const userID = user.id
    await fetch(`/api/votes`, {
      method: 'POST',
      body: JSON.stringify({ article_id: articleID, user_id: userID, vote: vote })
    })
  }

  openArticleModal = e => {
    const { showModal, dataSet } = this.props
    console.dir('openArticle: ' + dataSet)
    showModal({
      open: true,
      url: dataSet.url,
      title: dataSet.title,
      id: dataSet.id,
      closeModal: this.closeModal
    }, 'article')
    this.setState({
      isRead: true
    })
  }

  render () {
    const { classes, dataSet } = this.props
    var jsDate = new Date(dataSet.publication_date)
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    jsDate = jsDate.toLocaleDateString('en-US', options)
    return (
      <Card className='card'>
        <ButtonBase
          onClick={this.openArticleModal}
          className={classes.cardButton}
        >
          <CardHeader
            style={{backgroundImage: 'url(' + dataSet.urlToImage + ')'}}
            className='card-header'
          >
            <h4 className='card-header--title'>{dataSet.source}</h4>
          </CardHeader>
          <CardContent
            className='card-body'
          >
            <p className='date'>{jsDate}</p>
            <h2>{dataSet.title}</h2>
          </CardContent>
        </ButtonBase>
      </Card>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})

const mapStateToProps = state => ({
  user: state.users.loggedInUser
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewsCard))
