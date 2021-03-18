import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SpotifyNavBar from "./Components/HeaderComponent/SpotifyNavBar";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import SignupComponent from "./Components/AuthComponent/SignupComponent";
import LoginComponent from "./Components/AuthComponent/LoginComponent";
import PageNotFound from "./Components/PageNoteFoundComponent/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <Router>
          <header>
            <SpotifyNavBar />
          </header>
          <ToastContainer />
          <Fragment>
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/signup" exact component={SignupComponent} />
              <Route path="/login" exact component={LoginComponent} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
