import React, { Component } from 'react'
import '../../node_modules/react-vis/dist/style.css'
import { fetchUserBias, fetchArticlesBias } from '../actions/biases'
import { connect } from 'react-redux'
import { BiasChart } from 'components'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  chart: {
    height: 300,
    width: 300
  }
})

const RANGE_1 = [0, 1]
const RANGE_2 = [0, 100]

const transformValues = (obj) => {
  for (var k in obj) {
    if (obj.hasOwnProperty(k)) {
      obj[k] = parseInt(convertRange(obj[k], RANGE_1, RANGE_2), 10)
    }
  }
  return obj[k]
}

const convertRange = (value, range1, range2) => (
  (value - range1[ 0 ]) * (range2[ 1 ] - range2[ 0 ]) / (range1[ 1 ] - range1[ 0 ]) + range2[ 0 ]
)

const isEmptyOrUndefined = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) { return false }
  }
  return true
}

const copyStateProperties = (stateObj, obj) => {
  for (var key in stateObj) {
    if (stateObj.hasOwnProperty(key)) {
      obj[key] = stateObj[key]
    }
  }
}

class ChartsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      flagUserLocalBias: true,
      renderKeys: {
        articles: false,
        user: false
      },
      uBias: props.uBias,
      aBias: props.aBias,
      data: [
        {
          'type': 'conservative'
        },
        {
          'type': 'liberal'
        },
        {
          'type': 'libertarian'
        },
        {
          'type': 'green'
        }
      ]
    }
  }

  static getDerivedStateFromProps (props, state) {
    var draft = [...state.data]
    var draftKeys = {}
    var datum = {}

    if ((props.uBias !== state.uBias) && !isEmptyOrUndefined(props.uBias)) {
      const { uBias } = props
      copyStateProperties(uBias, datum)

      transformValues(datum)
      for (const [index] of draft.entries()) {
        draft[index]['user'] = datum[draft[index]['type']]
      }
      copyStateProperties(state.renderKeys, draftKeys)
      draftKeys.user = true
      return {
        renderKeys: draftKeys,
        data: draft
      }
    }
    if (props.aBias !== state.aBias) {
      const { aBias } = props
      if (!isEmptyOrUndefined(aBias)) {
        copyStateProperties(aBias, datum)

        transformValues(datum)
        for (const [index] of draft.entries()) {
          draft[index]['articles'] = datum[draft[index]['type']]
        }
        copyStateProperties(state.renderKeys, draftKeys)
        draftKeys.articles = true
        return {
          renderKeys: draftKeys,
          data: draft
        }
      }
    }
    return null
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    const { flagUserLocalBias } = this.state
    const { fetchUserBias } = this.props
    if (flagUserLocalBias) {
      if (prevProps.user.id !== undefined) {
        fetchUserBias(prevProps.user.id)
        this.setState({
          flagUserLocalBias: false
        })
      }
    }
  }

  componentDidMount () {
    this.props.fetchArticlesBias()
  }

  chartLegend () {
    const { renderKeys, articlesReady, userReady } = this.state
    var keys = Object.keys(renderKeys)

    if (articlesReady) {
      renderKeys.articles = true
    }
    if (userReady) {
      renderKeys.user = true
    }
    return keys.filter((key) => (renderKeys[key]))
  }

  render () {
    const { classes } = this.props
    const { data, renderKeys } = this.state

    const ready = Object.keys(renderKeys).some((key) => renderKeys[key] === true)
    if (ready) {
      var keys = this.chartLegend()
    }
    return (
      <div className={classes.chart}>
        { ready && <BiasChart data={data} keys={keys} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.currentUser,
  aBias: state.articlesBias.data,
  uBias: state.userBias.data
})

export default connect(mapStateToProps, { fetchUserBias, fetchArticlesBias })(withStyles(styles)(ChartsContainer))
