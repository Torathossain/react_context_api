import React, { Component } from "react";

import { AuthContext } from "../contexts/authContext";

export default class AuthProvider extends Component {
  state = {
    isAuthenticated: false,
    registeredUser: null,
    currentUser: null
  };

  componentDidMount() {
    if (localStorage.current_user) {
      this.setState(prevState => {
        return {
          isAuthenticated: true,
          registeredUser: null,
          currentUser: JSON.parse(localStorage.current_user)
        };
      });
    }
  }

  onHandleRegister = (user, history) => {
    this.setState(prevState => {
      return {
        registeredUser: user
      };
    });

    //Set Registered User on Local Storage
    localStorage.setItem("access_user", JSON.stringify(user));
    history.push("/login");
  };

  onHandleLogIn = (user, history) => {
    const oldUser = JSON.parse(localStorage.getItem("access_user"));
    if (!oldUser) {
      alert(`User not found!`);
      return false;
    }
    if (user.email === oldUser.email && user.password === oldUser.password) {
      localStorage.clear();
      this.setState(prevState => {
        return {
          isAuthenticated: !!localStorage.getItem("current_user") !== null,
          registeredUser: null,
          currentUser: oldUser
        };
      });

      localStorage.setItem("current_user", JSON.stringify(oldUser));
      history.push("/dashboard");
      return true;
    } else {
      alert(`User not found!`);
      return false;
    }
  };

  onHandleLogOut = () => {
    localStorage.clear();
    this.setState(prevState => {
      return {
        isAuthenticated: false,
        registeredUser: null,
        currentUser: null
      };
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuthenticated: this.state.isAuthenticated,
          registeredUser: this.state.registeredUser,
          currentUser: this.state.currentUser,
          register: this.onHandleRegister.bind(this),
          login: this.onHandleLogIn.bind(this),
          logout: this.onHandleLogOut.bind(this)
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
