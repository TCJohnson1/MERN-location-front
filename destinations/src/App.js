import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <div className="my-list-button">
            <a id="my-list-button" className="waves-effect waves-light btn">
              My List
            </a>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
