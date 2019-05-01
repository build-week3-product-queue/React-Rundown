import React, { Components } from 'react';

import profile from './profile';
import './profile.css';
import profile from './profile';

class profiles extends Components {
  render() {
    return (
      <div className="profiles">
        <h1>Data Base</h1>
        <div className="container">
          <ul>
          {this.props.profiles.map(profile => {
            return (
              <Profile 
                name={profile.name}
                id={profile.id}
                age={profile.age}
                height={profile.height}
                key={profile.id}
              />
              );
            })}
          </ul>
        </div>
      </div> 
    );
  }
}

profile.defaultProps = {
 profiles: [],
};

export default profiles;
