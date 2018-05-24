import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm"
import { Search } from 'semantic-ui-react'
import _ from "lodash";

class PokemonPage extends React.Component {
	state = {
		pokemonCollection: []
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
				<br/>
				<PokemonForm/>
			</div>
		);
	}
}

export default PokemonPage;