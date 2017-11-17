import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component }) => (
  <Route
    render={props =>
      localStorage.getItem("user") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
