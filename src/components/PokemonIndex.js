import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchValue: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => {
      this.setState({
        pokemon: pokemons
      })
    })
  }

  handleSearch = (e, {value}) => {
    this.setState({
      searchValue: value
    })

  }

  render() {
    const filteredPokemon = this.state.pokemon.filter(poke => {
      return poke.name.includes(this.state.searchValue)
    })
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={filteredPokemon} />
      </div>
    )
  }
}

export default PokemonPage
