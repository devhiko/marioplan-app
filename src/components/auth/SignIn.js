import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

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
    const { authError, authSuccess } = this.props;
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="white"
        >
          {authError ?
            <div className='red-text center '>{authError}</div>
            :
            <div className='green-text center'>{authSuccess}</div>
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
    authSuccess: state.auth.authSuccess
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);