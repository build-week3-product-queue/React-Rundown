import React, { Component } from 'react';

import './App.css';
import ProfileForm from './components/ProfileForm';
import Profiles from './components/Profiles';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Profiles: [],
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3001/Profiles';

    axios
      .get(endpoint)
      .then(response => {
        this.setState({Profiles: response.data });
      })
      .catch(error => {
        console.log('Error: ', error);
      })
  }

  newProfile = (data) => {
    axios
    .post('http://localhost:3001/Profiles', data)
    .then(response => {
      this.setState({
        Profiles: response.data
      })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-links">
            <NavLink className="nav-link"  to='/Profile-form'>
              Add Profile
            </NavLink>
            <NavLink className="nav-link" exact to='/'>
              Profiles
            </NavLink>
          </div>
        </nav>
        <Route path='/profile-form' render={props => <ProfileForm
        {...props}
        newProfile={this.newProfile}
        />} />
        <Route  exact path='/' render={props => <Profiles 
        {...props}
        Profiles={this.state.Profiles} />} />
      </div>
    );
  }
}
 
export default App;
