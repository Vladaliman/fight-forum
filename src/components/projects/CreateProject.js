import React, { Component } from "react";

export default class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign in</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea id="content" className="materialize-textarea"></textarea>
          </div>
          <div className="input-field">
            <button className="btn grey darken-3 z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
