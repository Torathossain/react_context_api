import React from "react";

export const AuthContext = React.createContext({
  isAuthenticated: false,
  registeredUser: null,
  currentUser: null,
  register: () => {},
  login: () => {},
  logout: () => {}
});