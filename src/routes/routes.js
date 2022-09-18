import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "../pages/Home";
import AccountPage from "../pages/Account";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/account">
          <AccountPage />
        </Route>
      </Switch>
    </>
  )
}

export default Routes

