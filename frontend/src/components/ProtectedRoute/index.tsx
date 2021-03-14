import React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import Auth from "../../helpers/auth";
const PrivateRoute: React.FC<RouteProps> = (props) => {
  return Auth.hasToken() ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
  );
};

export default PrivateRoute;
