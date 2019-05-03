import React from 'react';
import './Profile.css';

const Profile = props => {
  return (
    <div className="Profile">
      <div className="Profiles">
        <h3>{props.name}</h3>
        <strong>{props.idea} good</strong>
        <p>{props.age} user age</p>
      </div>
      
    </div>
  );
};

Profile.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Profile;
