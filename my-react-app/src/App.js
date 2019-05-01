import React, { Component } from 'react';

import './App.css';
import profileForm from './components/profileForm';
import profiles from './components/profiles';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    const endpoint = 'http://localhost:3333/profiles';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({profiles: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  newProfile = (data) => {
    axios
    .post('http://localhost:3333/profiles', data)
    .then(response => {
      this.setState({
        profiles: response.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink className="nav-link"  to='/profile-form'>
              Add profile
            </NavLink>
            <NavLink className="nav-link" exact to='/'>
              profiles
            </NavLink>
          </div>
        </nav>
        <Route path='/profile-form' render={props => <profileForm
        {...props}
        newProfile={this.newProfile}
        />} />
        <Route  exact path='/' render={props => <profiles 
        {...props}
        profiles={this.state.profiles} />} />
      </div>
    );
  }
}
 
export default App;
