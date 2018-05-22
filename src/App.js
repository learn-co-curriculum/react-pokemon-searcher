import React, { Component } from 'react';
import PokemonPage from "./containers/PokemonPage";
import PokemonForm from "./containers/PokemonForm";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<PokemonPage />
        <br/><br/>
        <PokemonForm />
			</div>
    );
  }
}

export default App;
