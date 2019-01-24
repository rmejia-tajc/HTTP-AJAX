import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: {
        name: "",
        age: "",
        email: ""
      },
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
      });
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
