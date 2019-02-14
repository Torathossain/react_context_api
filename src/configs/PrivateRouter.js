import React from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthContext.Consumer>
      {context => {
        return context.isAuthenticated ? (
          <Route {...rest} render={props => {
              return <Component {...props} />
          }} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    </AuthContext.Consumer>
  );
};
