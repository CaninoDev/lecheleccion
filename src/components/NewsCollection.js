import React, { Component } from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'

class NewsCollection extends Component {
  render () { 

    const footer = <span> <Button label='Want to know more?' /> </span>

    let cards = this.props.news.map((newCard, index) =>
      <Card title={newCard.title} footer={footer} key={index}> 
        <p>{newCard.description}</p> 
      </Card>
    )
    return (
      <React.Fragment>
          {cards}
      </React.Fragment>
    )

  }
}

export default NewsCollection