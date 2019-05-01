import React, { components } from 'react';

import './App.css';
import ProfileForm from './components/ProfileForm.';
import Profiles from './components/Profiles.';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends components {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3000/profiles';

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
    .post('http://localhost:3000/profiles', data)
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
