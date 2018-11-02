import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  state = {
    pokemonCollection: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonCollection => this.setState({ pokemonCollection: pokemonCollection }))
      .catch(e => console.error(e))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

  toggleImage = pokemon => {
    const col = this.state.pokemonCollection
    const i = col.indexOf(pokemon)
    this.setState({
      pokemonCollection: [
        ...col.slice(0, i),
        // initially pokemon.isClicked is undefined; inverting that falsey value makes it true
        { ...pokemon, isClicked: !pokemon.isClicked },
        ...col.slice(i + 1)
      ]
    })
  }

  addPokemon = pokemon => {
    this.setState({ pokemonCollection: [...this.state.pokemonCollection, pokemon] })
  }

  render() {
    const desiredPokemon = this.state.pokemonCollection.filter(p =>
      p.name.includes(this.state.searchTerm)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={desiredPokemon} toggleImage={this.toggleImage} />
      </div>
    )
  }
}

export default PokemonIndex
