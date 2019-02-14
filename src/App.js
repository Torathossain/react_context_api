import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/layouts/navbar/Navbar";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Footer from "./components/layouts/footer/Footer";
import Profile from "./components/profile/Profile";
import Dashboard from "./components/dashboard/Dashboard";

import "./App.css";

import { AuthContext } from "./contexts/authContext";
import AuthProvider from "./providers/AuthProvider";
import { PrivateRoute } from "./configs/PrivateRouter";

class App extends Component {
  static contextType = AuthContext;

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <AuthProvider>
            <header>
              <Navbar />
            </header>
            <main className="App container my-4">
              <Switch>
                {this.context.isAuthenticated && (
                  <Redirect from="/" to="/dashboard" exact />
                )}
                {!this.context.isAuthenticated && (
                  <Redirect from="/" to="/home" exact />
                )}
                {this.context.isAuthenticated && (
                  <Redirect from="/login" to="/dashboard" exact />
                )}
                {!this.context.isAuthenticated && (
                  <Route exact path="/home" component={Home} />
                )}
                {!this.context.isAuthenticated && (
                  <Route exact path="/register" component={Register} />
                )}
                {!this.context.isAuthenticated && (
                  <Route exact path="/login" component={Login} />
                )}
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </main>
            <Footer />
          </AuthProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
