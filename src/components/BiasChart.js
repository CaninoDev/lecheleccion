import React, { Component } from 'react'
import '../../node_modules/react-vis/dist/style.css'
import { RadarChart } from 'react-vis'
import { format } from 'd3-format'

const DOMAIN = [
  {name: 'libertarian', domain: [0, 1], getValue: d => d.libertarian, tickFormat: t => t},
  {name: 'green', domain: [0, 1], getValue: d => d.green},
  {name: 'liberal', domain: [0, 1], getValue: d => d.liberal},
  {name: 'conservative', domain: [0, 1], getValue: d => d.conservative}
]

const basicFormat = format('.2r')
const wideFormat = format('.3r')
class BiasChart extends Component {
  state = {
    data: [{
      libertarian: this.props.data.libertarian,
      green: this.props.data.green,
      liberal: this.props.data.liberal,
      conservative: this.props.data.conservative
    }]
  }
  render () {
    console.log('BiasChart' + this.props.data)
    const { data } = this.state
    console.log(data)
    return (
      <div className='centered-and-flexed'>
        <RadarChart
          animation
          data={data}
          domains={DOMAIN}
          tickFormat={t => wideFormat(t)}
          width={400}
          height={300}
        />
      </div>
    )
  }
}

export default BiasChart
