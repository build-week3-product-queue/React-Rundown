import React, { Component } from 'react';
import './Profile';

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addProfile = event => {
    event.preventDefault();
    this.props.newProfile(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    }); 

    this.props.history.push('/');
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="profileForm">
        <div className="form">
          <form onSubmit={this.addProfile}>
          <label>
            Name:
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            /> <br></br>
          </label>
          <label>
            Age:
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            /> <br></br>
          </label>
          <label>
            Idea:
            <input
              onChange={this.handleInputChange}
              placeholder="idea"
              value={this.state.idea}
              name="idea"
            />
          </label>
          
          <button className="submit" type="submit" /*onClick={this.addProfile}*/>Add your idea</button>
        </form>
        </div>
        
      </div>
    );
  }
}

export default ProfileForm;
