import React, { Component } from 'react';

import "./Dashboard.css";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
      <div className="jumbotron text-center text-light">
        <h1 className="display-3">Dashboard</h1>
        <p className="lead">
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <a className="btn btn-light btn-lg" href="https://www.github.com/rooneyrulz">
          VISIT GITHUB
        </a>
      </div>
    </div>
    )
  }
}
