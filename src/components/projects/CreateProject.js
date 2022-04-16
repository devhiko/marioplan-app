import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'

class CreateProject extends Component {
  state = {
    title: '',
    content: ''
  }
  // this is important for forms
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state)
  }
  render() {
    return (
      <div className="container">
        <form
          onSubmit={this.handleSubmit}
          className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>

          <div className="input-field">
            <label>Project Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="title" />
          </div>

          <div className="input-field">
            <label>Project Content</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="content"
              className="input-field">

            </input>
          </div>

          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">
              Create !
            </button>
          </div>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);