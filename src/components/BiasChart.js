import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'

const BiasChart = ({data}) => {
  return (
    <ResponsiveRadar
      data={data}
      keys={[
        'articles',
        'user'
      ]}
      indexBy='type'
      maxValue='auto'
      margin={{
        'top': 53,
        'right': 68,
        'bottom': 40,
        'left': 80
      }}
      curve='catmullRomClosed'
      borderWidth={2}
      borderColor='inherit'
      gridLevels={3}
      gridShape='circular'
      gridLabelOffset={24}
      enableDots={false}
      dotSize={8}
      dotColor='inherit'
      dotBorderWidth={0}
      dotBorderColor='#ffffff'
      enableDotLabel
      dotLabel='index'
      dotLabelYOffset={-20}
      colors='nivo'
      colorBy='key'
      fillOpacity={0.1}
      animate
      motionStiffness={90}
      motionDamping={15}
      isInteractive
      legends={[
        {
          'anchor': 'top-left',
          'direction': 'column',
          'translateX': -50,
          'translateY': -40,
          'itemWidth': 80,
          'itemHeight': 20,
          'itemTextColor': '#999',
          'symbolSize': 12,
          'symbolShape': 'circle',
          'effects': [
            {
              'on': 'hover',
              'style': {
                'itemTextColor': '#000'
              }
            }
          ]
        }
      ]}
    />
  )
}
export default BiasChart
