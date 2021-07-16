import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import SignInComponent from "./SignIn";
import SignInComponentVanilla from "./SignInVanilla";
import SignUp from "./SignUp";
import SignUpYupComponent from "./signUpYup";
import ReusableForm from "./ReusableForm";
import UncontroledComponent from "./UncontroledComponent";
import HookForm from "./HookForm";
class RootComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={"/signin"}
            render={() => {
              return <SignInComponent />;
            }}
          />
          <Route
            exact
            path={"/signinVanilla"}
            render={() => {
              return <SignInComponentVanilla />;
            }}
          />
          <Route
            exact
            path={"/signup"}
            render={() => {
              return <SignUp />;
            }}
          />
          <Route
            exact
            path={"/signupyup"}
            render={() => {
              return <SignUpYupComponent />;
            }}
          />

          <Route
            exact
            path={"/reusableform"}
            render={() => {
              return <ReusableForm />;
            }}
          />

          <Route
            exact
            path={"/uncontroled"}
            render={() => {
              return <UncontroledComponent />;
            }}
          />

          <Route
            exact
            path={"/hookform"}
            render={() => {
              return <HookForm />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default RootComponent;
