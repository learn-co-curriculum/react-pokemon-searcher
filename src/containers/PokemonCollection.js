import React from "react";
import PokemonCard from "./PokemonCard";
import {Card} from 'semantic-ui-react'
import uuid from 'uuid';

class PokemonCollection extends React.Component {

	render(){
		return (
		<Card.Group itemsPerRow={6}>
      <h1>Sup Fam</h1>
		</Card.Group>
		)
	}
};

export default PokemonCollection;