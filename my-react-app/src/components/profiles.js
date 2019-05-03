import React, { Component } from 'react';

import Profile from './Profile';
import './Profile.css';

class Profiles extends Component {
  render() {
    return (
      <div className="Profiles">
        <h1>Idea Group</h1>
        <div className="container">
          <ul>
          {this.props.Profiles.map(Profile => {
            return (
              <Profile 
                name={Profile.name}
                id={Profile.id}
                age={Profile.age}
                idea={Profile.idea}
                key={Profile.id}
              />
              );
            })}
          </ul>
        </div>
      </div> 
    );
  }
}

Profile.defaultProps = {
 Profiles: [],
};

export default Profiles;
