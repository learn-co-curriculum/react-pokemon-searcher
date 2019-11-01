import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.PureComponent {
  render(){
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(poke => {
          return <PokemonCard poke={poke}/>
        })}
      </Card.Group>
    )
  }

}

export default PokemonCollection
