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
    obj[k] = parseInt(convertRange(obj[k], RANGE_1, RANGE_2))
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

const copyProperty = (obj1, obj2) => {
  for (var key in obj1) {
    obj2[key] = obj1[key]
  }
}

class ChartsContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user,
      articlesReady: false,
      userReady: false,
      flagUserLocalBias: true,
      renderKeys: {
        articles: false,
        user: false
      },
      data: [
        {
          'type': 'libertarian'
        },
        {
          'type': 'green'
        },
        {
          'type': 'liberal'
        },
        {
          'type': 'conservative'
        }
      ]
    }
  }

  static getDerivedStateFromProps (props, state) {
    var draft = [...state.data]
    var datum = {}

    if (props.uBias !== state.uBias) {
      const { uBias } = props
      if (!isEmptyOrUndefined(uBias)) {
        let datum = [uBias.libertarian, uBias.green, uBias.liberal, uBias.conservative]

        transformValues(datum)
        for (const [index] of draft.entries()) {
          draft[index]['user'] = datum[index]
        }
        return {
          userReady: true,
          uBias: uBias,
          data: draft
        }
      }
    }
    if (props.aBias !== state.aBias) {
      const { aBias } = props
      if (!isEmptyOrUndefined(aBias)) {
        copyProperty(aBias, datum)

        transformValues(datum)
        for (const [index] of draft.entries()) {
          draft[index]['articles'] = datum[draft[index]['type']]
        }
        return {
          articlesReady: true,
          aBias: aBias,
          data: draft
        }
      }
    }
    return null
  }

  componentDidUpdate (prevProps, prevState) {
    let test = 2
    const { flagUserLocalBias } = this.state
    const { fetchUserBias } = this.props
    if (flagUserLocalBias) {
      if (prevProps.user.id !== prevState.user.id) {
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
    let keys = Object.keys(renderKeys)

    if (articlesReady) {
      renderKeys['articles'] = true
    }
    if (userReady) {
      renderKeys['user'] = true
    }
    renderKeys.filter((key) => (renderKeys[key]))
  }

  render () {
    const { classes } = this.props
    const { data } = this.state
    let keys = this.chartLegend()
    return (
      <div className={classes.chart}>
        {this.chartLegend && <BiasChart data={data} keys={keys} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.currentUser,
  aBias: state.articlesBias.data,
  uBias: state.userBias.data.bias
})

export default connect(mapStateToProps, { fetchUserBias, fetchArticlesBias })(withStyles(styles)(ChartsContainer))