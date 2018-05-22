import React from "react";
import PokemonCollection from "./PokemonCollection";
import { Search } from 'semantic-ui-react'
import _ from "lodash";

class PokemonPage extends React.Component {
	state = {
		pokemonCollection: [],
		desiredPokemon: []
	};


	render() {
		return (
			<div>
        <h1>Pokemon Searcher</h1>
        <br/>
        <Search
        onSearchChange={_.debounce(() => console.log('🤔'), 500)}
        showNoResults = {false}
        />
        <br/>
				<PokemonCollection/>
			</div>
		);
	}
}

export default PokemonPage;