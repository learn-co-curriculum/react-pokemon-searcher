import React from "react";
import {Card} from 'semantic-ui-react'

class PokemonCard extends React.Component {
	render() {
    const {name} = this.props.pokemon
    const hp = this.props.pokemon.stats.filter(s => {return (s.name === "hp")})[0].value
    const frontUrl = ''
    return(
      <Card>
        <div >
          <div className="image">
            <img src={frontUrl} alt="oh no!"/>
          </div>
          <div className="content">
            <div className="header">
              {name}
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red"/>
                {hp} hp
            </span>
          </div>
        </div>
      </Card>
    );
  };
};

export default PokemonCard;