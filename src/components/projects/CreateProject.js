import React, { Component } from 'react';

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
    console.log(this.state);
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
            <textarea
              onChange={this.handleChange}
              id="content"
              className="materialize-textarea">

            </textarea>
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

export default CreateProject;