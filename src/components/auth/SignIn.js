import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  // this is important for forms
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="white"
        >
          {authError ?
            <div className='red-text center '>{authError}</div> : null
          }
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              id="email"
            />
          </div>
          <div className="input-field">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              id="password"
            />
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);