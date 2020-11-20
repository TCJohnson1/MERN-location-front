import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <main>
          <Switch>
            <Route path="/" exact component={Landing} />
          </Switch>
        </main>

        <Footer />
      </Router>
    );
  }
}
