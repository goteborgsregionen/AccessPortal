import React from "react"
import { useAuth } from "oidc-react";
import { RouteProps, Route, Redirect } from "react-router"

export default function Restricted ({ component: C, componentProps = {}, ...rest }) {
  const auth = useAuth();
  return (
    <Route
      exact
      {...rest}
      render={props =>
        auth.userData ? <C {...props} {...componentProps} /> : <Redirect to="/unauthorized" />
      }
    />
  )
}