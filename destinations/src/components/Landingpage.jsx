import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
    BrowserRouter as Router, 
    Link} from 'react-router-dom'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <div className="my-list-button">
              <Router>
            <Link
            to='/newdestination'
              id="my-list-button"
              className="btn waves-effect waves-orange darken-4"
            >
              My List/ add new
            </Link>
            </Router>
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
              className="btn waves-effect waves-orange darken-4"
              type="submit"
              name="action"
            >
              Destination Roulette
            </button>
          </div>
          <div className="find-destination">
            <form>
              <h5>Find by Name</h5>
              <input
                className="name-of-destination"
                id="name-of-destination"
                type="text"
                placeholder="Name of Destination"
              ></input>
              <button
                id="add-to-list-button"
                className="btn waves-effect waves-orange darken-4"
                type="submit"
                name="action"
              >
                Add to my List
              </button>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}