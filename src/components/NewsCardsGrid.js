import React from 'react'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import { NewsCardContainer } from 'containers'
import sizeMe from 'react-sizeme'

const { helix } = transitions

const NewsCardsGrid = props => {
  return (
    <StackGrid
      columnWidth={240}
      duration={960}
      gutterWidth={16}
      gutterHeight={16}
      monitorImagesLoaded
      easing={easings.quartOut}
      appear={helix.appear}
      appeared={helix.appeared}
      enter={helix.enter}
      entered={helix.entered}
      leaved={helix.leaved}
    >
      {props.news.map((article, idx) => (
        <NewsCardContainer key={idx} articleData={article} />
      ))}
    </StackGrid>
  )
}

export default sizeMe()(NewsCardsGrid)
