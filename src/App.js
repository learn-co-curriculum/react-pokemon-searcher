import React from 'react';
import PokemonIndex from './components/PokemonIndex';
import './App.css';
import pokeball from './pokeball.png';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={pokeball} className="App-logo" alt="pokeball" />
    </header>
    <PokemonIndex />
  </div>
)

export default App;
