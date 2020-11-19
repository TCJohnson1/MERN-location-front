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
            <button
              id="my-list-button"
              class="btn waves-effect waves-orange darken-4"
              type="submit"
              name="action"
            >
              My List
            </button>
          </div>
          <div className="cool-image">
            <img
              id="cool-image"
              src="https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810_1280.jpg"
              alt="luggage"
            ></img>
          </div>
          <hr className="horizontal-bar"></hr>
          <div className="random-destination-button">
            <button
              id="random-destination-button"
              class="btn waves-effect waves-orange darken-4"
              type="submit"
              name="action"
            >
              Destination Roulette
            </button>
            <div class="find-destination">
              <form>
                <div class="row"></div>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
