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
            <button id="my-list-button">My List</button>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
