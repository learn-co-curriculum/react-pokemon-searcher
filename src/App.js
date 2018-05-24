import React, { Component } from 'react';
import PokemonPage from "./components/PokemonPage";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<PokemonPage/>
			</div>
    );
  }
}

export default App;
