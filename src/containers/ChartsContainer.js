import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis } from 'recharts'
import ReactEcharts from 'echarts-for-react'
import { fetchArticlesBias, fetchUserBias } from '../actions/biases'
import Grid from '@material-ui/core/Grid'
import { setPropTypes } from 'recompose'

const RANGE_1 = [0, 1]
const RANGE_2 = [0, 100]

const setNormalizedValues = (obj) => (
  Object.is(obj, undefined) ? {libertarian: 0, liberal: 0, green: 0, conservative: 0} : transformValues(obj)
)

const transformValues = (obj) => {
  for (var k in obj) {
    obj[k] = convertRange(obj[k], RANGE_1, RANGE_2)
  }
  return obj[k]
}

const convertRange = (value, range1, range2) => (
  (value - range1[ 0 ]) * (range2[ 1 ] - range2[ 0 ]) / (range1[ 1 ] - range1[ 0 ]) + range2[ 0 ]
)
class ChartsContainer extends Component {
  constructor (props) {
    super(props)
    const { aBias, uBias, fetchArticlesBias, fetchUserBias, users } = props
    fetchArticlesBias()
    if (!users === undefined) {
      fetchUserBias(users.currentUser.id)
    }
    this.A = setNormalizedValues(aBias)
    this.B = setNormalizedValues(uBias)
  }

  /* eChart specific framework. From loading.jsx found in echarts-for-react */
  _t = null
  getOption = () => {
    return {
      title: {
        text: 'Bias'
      },
      tooltip: {},
      legend: {
        data: ['Articles', 'User']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'libertarian', max: 100},
          { name: 'green', max: 100},
          { name: 'liberal', max: 100},
          { name: 'conservative', max: 100}

        ]
      },
      series: [{
        name: 'Media Bias Consumption',
        type: 'radar',
        areaStyle: {normal: {}},
        data: [
          {
            value: [A.libertarian, A.green, A.liberal, A.conservative],
            name: 'Articles'
          },
          {
            value: [B.libertarian, B.green, B.liberal, B.conservative],
            name: 'User'
          }
        ]
      }]
    }
  }

  onChartReady = (chart) => {
    this._t = setTimeout(function () {
      chart.hideLoading()
    }, 3000)
  };

  getLoadingOption = () => {
    return {
      text: 'Loading...',
      color: '#4413c2',
      textColor: '#270240',
      maskColor: 'rgba(194, 88, 86, 0.3)',
      zlevel: 0
    }
  }
  componentWillUnmount () {
    clearTimeout(this._t)
  }
  render () {
    const { data } = this.data
    const { user } = this.props
    console.log(data)
    return (
      <Grid item xs>
        <ReactEcharts
          option={this.getOption()}
          onChartReady={this.onChartReady}
          loadingOption={this.getLoadingOption()}
          showLoading />
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.currentUser,
  articlesBias: state.articles_bias,
  userBias: state.user_bias
})

export default connect(mapStateToProps, { fetchUserBias, fetchArticlesBias })(ChartsContainer)
