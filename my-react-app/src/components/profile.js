import React from 'react';
import './profile.css';

const profile = props => {
  return (
    <div className="profile">
      <div className="profiles">
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} profile years old</p>
      </div>
      
    </div>
  );
};

profile.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default profile;
