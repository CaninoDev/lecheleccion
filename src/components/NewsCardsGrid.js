import React from 'react'
import StackGrid, { transitions, easings } from 'react-stack-grid'
import { NewsCardContainer } from 'containers'

const { helix } = transitions

const NewsCardsGrid = ({news}) => (
  <StackGrid
    columnWidth={320}
    duration={960}
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

export default NewsCardsGrid
