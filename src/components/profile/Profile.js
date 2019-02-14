import React, { Component } from 'react';

import { AuthContext } from "../../contexts/authContext";

export default class Profile extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    }
  }

  componentDidMount() {
    this.setState(prevState => {
      return {
        name: this.context.currentUser.name,
        email: this.context.currentUser.email
      };
    });
    console.log(this.context.currentUser);
  }

  render() {
    return (
      <div className="Profile">
        <div className="container">
          <h1 className="display-4">
            Profile
          </h1>
          <div className="main">
            <p className="lead mb-0 text-success">Name >> { this.state.name }</p>
            <p className="lead text-success">Email >> { this.state.email }</p>
          </div>
        </div>
      </div>
    )
  }
}
