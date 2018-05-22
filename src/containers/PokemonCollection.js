import React from "react";
import PokemonCard from "./PokemonCard";
import {Card} from 'semantic-ui-react'
import uuid from 'uuid';

class PokemonCollection extends React.Component {

	render(){
		const {pokemonCollection} = this.props
		const pokemon = pokemonCollection.map((pokemon,index) => {
			return <PokemonCard key={uuid.v4()} pokemon={pokemon}/>
    });
		return (
		<Card.Group itemsPerRow={6}>
			{pokemon}
		</Card.Group>
		)
	}
};

export default PokemonCollection;