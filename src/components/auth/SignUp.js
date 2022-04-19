import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="white">
          {authError ?
            <div className='red-text center'>{authError}</div> : null
          }
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="firstName" />
          </div>
          <div className="input-field">
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="lastName" />
          </div>
          <div className="input-field">
            <div className="input-field">
              <label>Email</label>
              <input
                onChange={this.handleChange}
                type="email"
                id="email" />
            </div>
            <div className="input-field">
              <label>Password</label>
              <input
                onChange={this.handleChange}
                type="password"
                id="password" />
            </div>
            <button className="btn green lighten-1 z-depth-0">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);