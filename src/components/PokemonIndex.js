import React from 'react';
import PokemonCollection from './PokemonCollection';
// import PokemonForm from './PokemonForm';
import { Search } from 'semantic-ui-react';

class PokemonPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={null} showNoResults={false} />
        <br />
        <PokemonCollection />
        <br />
        {/*<PokemonForm />*/}
      </div>
    )
  }
}

export default PokemonPage;
