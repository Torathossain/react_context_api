import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="jumbotron text-center text-light">
        <h1 className="display-3">Authentication</h1>
        <p className="lead">
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <Link className="btn btn-dark btn-lg mr-2" to="/register">
          REGISTER
        </Link>
        <Link className="btn btn-light btn-lg" to="/login">
          LOGIN
        </Link>
      </div>
    </div>
  );
}
