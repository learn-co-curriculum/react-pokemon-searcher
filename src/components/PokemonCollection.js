import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(pokemon => {
          return (<PokemonCard 
            key={pokemon.id}
            frontURL={pokemon.sprites.front}
            backURL={pokemon.sprites.back}
            name={pokemon.name}
            hp={pokemon.stats[pokemon.stats.length - 1].value}
          />);
        })}
      </Card.Group>
    )
  }
}

export default PokemonCollection
