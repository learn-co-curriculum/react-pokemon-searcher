import React from "react";
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const { name, stats, sprites, clicked } = this.props.pokemon
    const hp = stats.filter(s => { return (s.name === "hp") })[0].value
    const url = clicked ? sprites.back : sprites.front
    const toggle = (e) => {
      this.props.toggleImage(this.props.pokemon)
    };
    return (
      <Card>
        <div onClick={toggle}>
          <div className="image">
            <img src={url} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">
              {name}
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  };
};

export default PokemonCard;