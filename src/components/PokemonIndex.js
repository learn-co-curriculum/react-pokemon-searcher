import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemon: [],
      value: '',
      newPokemon: []
    }

    this.pokemon = [];
  }

  componentWillMount() {
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemon => {
        this.pokemon = pokemon;
        this.setState({
          pokemon
        });
      });
  }

  handleSearchChange = (event, { value }) => {
    this.setState({ value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState({ value: '' })

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (pokemon) => re.test(pokemon.name)

      this.setState({
        pokemon: _.filter(this.pokemon, isMatch),
      })
    }, 300)
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </div>
    )
  }
}

export default PokemonIndex
