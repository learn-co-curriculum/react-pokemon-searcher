import React from 'react'
import { Card } from 'semantic-ui-react'

const CardFront = (props) => {

    return (
      <Card onClick={() => props.flipCard()}>
        <div>
          <div className="image">
            <img src={props.poke.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {props.poke.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    )

}

export default CardFront
