import React from "react";
import PokemonCollection from "./PokemonCollection";
import { Search } from 'semantic-ui-react'
import _ from "lodash";

class PokemonPage extends React.Component {
	state = {
		pokemonCollection: [],
		desiredPokemon: []
	};

	componentDidMount() {
		fetch("http://localhost:3000/pokemon")
			.then(res => res.json())
			.then(pokemonCollection => this.setState({ pokemonCollection: pokemonCollection, desiredPokemon: pokemonCollection }));
  }

  handleSearchChange = (e, {value}) => {
    this.setState({ desiredPokemon: this.state.pokemonCollection.filter(function(p){return p.name.includes(value)}) })
  }

	render() {
		return (
			<div>
        <h1>Pokemon Searcher</h1>
        <br/>
        <Search
        onSearchChange={_.debounce(this.handleSearchChange, 500)}
        showNoResults = {false}
        />
        <br/>
				<PokemonCollection
					pokemonCollection={this.state.desiredPokemon}
				/>
			</div>
		);
	}
}

export default PokemonPage;