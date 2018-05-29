import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

const PokemonCollection = props => (
  <Card.Group itemsPerRow={6}>
    {props.pokemon.map(pokemon => (
      <PokemonCard key={pokemon.id} pokemon={pokemon} toggleImage={props.toggleImage} />
    ))}
  </Card.Group>
)

export default PokemonCollection
