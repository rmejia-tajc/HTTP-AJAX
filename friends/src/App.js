import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';

class App extends Component {
  state = {
    friends: [],
    error: ''
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({
          friends: res.data,
          error: ''
        });
        console.log(this.state.friends);
      })
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
