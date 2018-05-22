import React from "react";
import {Card} from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  togglePokemonCard = () => {
    const value = !this.state.clicked
    this.setState({
      clicked: value
    })
  }

	render() {
    const whichImage = this.state.clicked? (
      'back'
    ) : (
      'front'
    )
    return(
      <Card>
        <div onClick={this.togglePokemonCard}>
          <div className="image">
            <img alt="oh no!" src={this.props.pokemon.sprites[whichImage]} />
          </div>
          <div className="content">
            <div className="header">
              {this.props.pokemon.name}
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red"/>
                {this.props.pokemon.stats[0].value} hp
            </span>
          </div>
        </div>
      </Card>
    );
  };
};

export default PokemonCard;