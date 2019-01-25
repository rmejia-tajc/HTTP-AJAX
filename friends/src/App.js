import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/FriendForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      friend: {
        name: '',
        age: '',
        email: ''
      },
      isUpdating: false,
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

  handleChanges = event => {
    event.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [event.target.name]: event.target.value
        }
      };
    });
  };

  addFriend = () => {
    axios
      .post(`http://localhost:5000/friends`, this.state.friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/List');
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteFriend = (event, friendId) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${friendId}`)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/List');
      })
      .catch(err => {
        console.log(err);
      });
  };

  populateForm = (event, id) => {
    event.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    });
    this.props.history.push('/friend-form');
  };

  updateFriend = () => {
    axios
      .put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          isUpdating: false,
          friend: {
            name: '',
            age: '',
            email: ''
          },
        });
        this.props.history.push('/List');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className='App'>
        <nav>
          <h1>Lambda's Friends</h1>
          <div className="nav-links">
            <NavLink to="/friend-form">
              {this.state.isUpdating ? 'Update' : 'Add'} Friend
            </NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/List">
              List
            </NavLink>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        
        <Route
          exact path="/List"
          render={props => <FriendsList {...props} friends={this.state.friends} />}
        />
        
        <Route
          path="/List/:friendId"
          render={props => (
            <Friend
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              populateForm={this.populateForm}
              />
            )}
          />
          
          <Route
            path="/friend-form"
            render={props => (
              <FriendForm
                {...props}
                addFriend={this.addFriend}
                handleChanges={this.handleChanges}
                isUpdating={this.state.isUpdating}
                friend={this.state.friend}
                updateFriend={this.updateFriend}
              />
            )}
          />

      </div>
      
    );
  }
}

export default App;
