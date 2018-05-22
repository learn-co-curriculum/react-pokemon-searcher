import React from 'react';
import {Form} from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, hp, frontUrl, backUrl } = this.state;
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          "name": name,
          "stats": [
            {
              "value": hp,
              "name": "hp"
            }
          ],
          "sprites": {
            "front": frontUrl,
            "back": backUrl
          }
      })
    })
      .then(response => response.json())
      .then(console.log('done'))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
      <h1>Add a Pokemon!</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Name' placeholder='Name' name='name' value = {this.state.name} onChange={this.handleChange}/>
          <Form.Input fluid label='hp' placeholder='hp' name='hp' value = {this.state.hp} onChange={this.handleChange}/>
          <Form.Input fluid label='Front Image URL' placeholder='url' name='frontUrl' value = {this.state.frontUrl} onChange={this.handleChange}/>
          <Form.Input fluid label='Back Image URL' placeholder='url' name='backUrl' value = {this.state.backUrl} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    );
  }
}

export default PokemonForm;