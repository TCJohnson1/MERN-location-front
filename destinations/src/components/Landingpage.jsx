import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <div className="container">
            <div className="my-list-button">
              <a
                href="/newdestination"
                id="my-list-button"
                className="btn waves-effect waves-orange darken-4"
              >
                My List | Add New
              </a>
            </div>
            <div className="cool-image">
              <img
                id="cool-image"
                src="https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810_1280.jpg"
                alt="luggage"
              ></img>
            </div>
            <div>
            <center>
            <h5 className='deep-orange-text'>Welcome to Dream Destinations! </h5>
                <p id='about'>If you've ever wanted to have your own travel destination bucket list, <b className='teal-text darken-4'><i>well now you can</i></b>. Find a location by name or if you're feeling lucky you can play <b className='teal-text darken-4'><i>'destination roulette'</i></b> to find a random location. Once you find somewhere you would like to visit, simply add it to your favorites to come back to later.</p>
                </center>
            </div>
            

            <hr className="horizontal-bar"></hr>
            {/* <div className="random-destination-button">
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
                <h5 className='deep-orange-text darken-4'>Find by Name</h5>
                <input
                  className="name-of-destination"
                  id="name-of-destination"
                  type="text"
                  placeholder="Name of Destination"
                ></input>
                <button
                  id="add-to-list-button"
                  className="btn waves-effect waves-teal darken-4"
                  type="submit"
                  name="action"
                >
                  Add to my List
                </button>
              </form>
            </div> */}
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
