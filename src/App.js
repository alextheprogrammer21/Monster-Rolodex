import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [] }
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon').then(response => response.json())
    .then(users => this.setState({monsters: users.results}))
  }
  render() {
    return(
      <div className = 'App'>
        <CardList>
        {
          this.state.monsters.map(monster => (
            <h1 key = {monster.name}> {monster.name}</h1>
          ))
        }
        </CardList>
      </div>
    )
  }
}

export default App;
