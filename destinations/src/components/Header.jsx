import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="teal darken-4">
          <div className="nav-wrapper">
          
            <a href="#!" className="brand-logo teal-text lighten-5">
            <i className=" large material-icons deep-orange-text accent-4">airplanemode_active</i>DREAM DESTINATIONS
            </a>
            <a href="#1" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons deep-orange-text accent-4">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#1" className="waves-effect waves-light teal-text lighten-5">Home</a>
              </li>
              <li>
                <a href="#1" className="waves-effect waves-light teal-text lighten-5">My Favorites</a>
              </li>
              <li>
                <a href="#1" className="waves-effect waves-light teal-text lighten-5">Signup/Login</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="#1" className="waves-effect waves-light teal-text lighten-5">Home</a>
          </li>
          <li>
            <a href="#1" className="waves-effect waves-light teal-text lighten-5">My Favorites</a>
          </li>
          <li>
            <a href="#1" className="waves-effect waves-light teal-text lighten-5">Signup/Login</a>
          </li>
        </ul>
      </header>
    );
  }
}