import React from 'react'
import { Card } from 'semantic-ui-react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class PokemonCard extends React.PureComponent{
  state = {
    flipped: false
  }

  flipCard = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }
  render() {
    return (
     <div>
       {this.state.flipped 
        ? <CardBack flipCard={this.flipCard} poke={this.props.poke} /> 
        : <CardFront flipCard={this.flipCard} poke={this.props.poke} />} 
     </div>
    )
  }

}

