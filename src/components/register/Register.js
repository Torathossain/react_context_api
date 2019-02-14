import React, { Component } from "react";

import "./Register.css";
import { AuthContext } from "../../contexts/authContext";

export default class Register extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);
    this.nameEl = React.createRef();
    this.emailEl = React.createRef();
    this.pswdEl = React.createRef();
    this.pswdEl2 = React.createRef();
  }

  componentDidMount() {
    if (this.context.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onHandleRegister = e => {
    e.preventDefault();
    const name = this.nameEl.current.value;
    const email = this.emailEl.current.value;
    const password = this.pswdEl.current.value;
    const password2 = this.pswdEl2.current.value;
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      password2.trim().length === 0
    ) {
      alert(`Please fill out all fields!`);
      return false;
    }

    if (
      password.trim() !== password2.trim()
    ) {
      alert(`Password is not matched!`);
      return false;
    }

    const newUser = {
      name: name,
      email: email,
      password: password
    };
    this.context.register(newUser, this.props.history);
    return true;
  };

  render() {
    return (
      <div className="Register">
        <div className="container">
          <div className="heading text-center px-3 py-4">
            <h1 className="display-4">REGISTER</h1>
          </div>
          <div className="main">
            <form onSubmit={ this.onHandleRegister } >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control form-control-lg"
                  placeholder="Enter Name"
                  required
                  ref={ this.nameEl }
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Email"
                  required
                  ref={ this.emailEl }
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
                  ref={ this.pswdEl }
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Password</label>
                <input
                  type="password"
                  name="password2"
                  id="password2"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  required
                  ref={ this.pswdEl2 }
                />
              </div>
              <button
                id="btn-register"
                type="submit"
                className="btn btn-block btn-success btn-lg"
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
