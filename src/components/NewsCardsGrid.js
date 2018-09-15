import React from 'react'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import { NewsCardContainer } from 'containers'
import sizeMe from 'react-sizeme'

const { helix } = transitions

const NewsCardsGrid = props => {
  const { size: {
    width
  },
  news
  } = props
  return (
    <StackGrid
      monitorImagesLoaded
      columnWidth={width <= 768 ? '100%' : '20%'}
      duration={1500}
      gutterWidth={16}
      gutterHeight={16}
      easing={easings.quartOut}
      appear={helix.appear}
      appeared={helix.appeared}
      enter={helix.enter}
      entered={helix.entered}
      leaved={helix.leaved}
    >
      {news.collection.map((article, idx) => (
        <NewsCardContainer key={idx} articleData={article} />
      ))}
    </StackGrid>
  )
}

export default sizeMe()(NewsCardsGrid)
