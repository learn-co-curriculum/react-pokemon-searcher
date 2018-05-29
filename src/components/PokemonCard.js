import React from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = props => {
  const { name, stats, sprites, isClicked } = props.pokemon
  const url = isClicked ? sprites.back : sprites.front
  const hp = stats.find(s => s.name === 'hp').value || 50
  const toggleImage = () => props.toggleImage(props.pokemon)

  return (
    <Card>
      <div onClick={toggleImage}>
        <div className="image">
          <img src={url} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
