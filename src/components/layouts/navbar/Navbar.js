import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";
import { AuthContext } from "../../../contexts/authContext";

export default function Navbar() {
  return (
    <AuthContext.Consumer>
      {context => {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to={ context.isAuthenticated ? "/dashboard" : "/home"}>
              REACT-CONTEXT
            </Link>
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                {context.isAuthenticated ? (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/dashboard">
                      DASHBOARD
                    </NavLink>
                  </li>
                ) : (
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/home">
                      HOME
                    </NavLink>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {context.isAuthenticated ? (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/profile">
                        PROFILE
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <a onClick={ context.logout } href="#!" className="btn nav-link">LOGOUT</a>
                    </li>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/register">
                        REGISTER
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        LOGIN
                      </NavLink>
                    </li>
                  </React.Fragment>
                )}
              </ul>
            </div>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
}
