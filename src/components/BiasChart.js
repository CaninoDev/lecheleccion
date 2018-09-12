import React from 'react'
import { ResponsiveRadar } from '@nivo/radar'

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const BiasChart = ({data}) => (
  <ResponsiveRadar
    data={data}
    keys={[
      'articles',
      'user'
    ]}
    indexBy='type'
    maxValue='auto'
    margin={{
      'top': 92,
      'right': 80,
      'bottom': 40,
      'left': 80
    }}
    curve='catmullRomClosed'
    borderWidth={1}
    borderColor='inherit:darker(1.2)'
    gridLevels={5}
    gridShape='circular'
    gridLabelOffset={41}
    enableDots
    dotSize={8}
    dotColor='inherit'
    dotBorderWidth={0}
    dotBorderColor='#ffffff'
    enableDotLabel
    dotLabel='value'
    dotLabelYOffset={-12}
    colors='dark2'
    colorBy='key'
    fillOpacity={0.15}
    animate
    motionStiffness={35}
    motionDamping={10}
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
