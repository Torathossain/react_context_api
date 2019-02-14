import React, { Component } from "react";

import "./Login.css";
import { AuthContext } from "../../contexts/authContext";

export default class Login extends Component {
  static contextType = AuthContext
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.pswdEl = React.createRef();
  }

  componentDidMount() {
    if (this.context.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onHandleLogin = e => {
    e.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.pswdEl.current.value;
    if (
      email.trim().length === 0 ||
      password.trim().length === 0
    ) {
      alert(`Please fill out all fields!`);
      return false;
    }
    //console.log(this.emailEl.current.value);
    const authenticateUser = {
      email: email,
      password: password
    };
    this.context.login(authenticateUser, this.props.history);
    console.log(this.context);
  };

  render() {
    return (
      <div className="Login">
        <div className="container">
          <div className="heading text-center px-3 py-4">
            <h1 className="display-4">LOG IN</h1>
          </div>
          <div className="main">
            <form onSubmit={this.onHandleLogin}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email"
                  required
                  ref={this.emailEl}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                  required
                  ref={this.pswdEl}
                />
              </div>
              <button
                id="btn-login"
                type="submit"
                className="btn btn-block btn-primary btn-lg"
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
