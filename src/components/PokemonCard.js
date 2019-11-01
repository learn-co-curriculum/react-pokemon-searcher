import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: props.frontURL
    }
  }

  handleClick = (event) => {
    if (this.state.imageURL === this.props.frontURL) {
      this.setState({
        imageURL: this.props.backURL
      })
    }
    else if (this.state.imageURL === this.props.backURL) {
      this.setState({
        imageURL: this.props.frontURL
      })
    }
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img alt="oh no!" src={this.state.imageURL}/>
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
