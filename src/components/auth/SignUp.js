import React, { Component } from 'react';

class SignIn extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={ this.handleSubmit }>
          <h5 className="center grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={ this.handleChange } />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign In</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
