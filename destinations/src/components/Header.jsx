import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav class="teal darken-4">
          <div class="nav-wrapper">
          
            <a href="#!" class="brand-logo teal-text lighten-5">
            <i class=" large material-icons deep-orange-text accent-4">airplanemode_active</i>DREAM DESTINATIONS
            </a>
            <a href="#1" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons deep-orange-text accent-4">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="#1" class="waves-effect waves-light teal-text lighten-5">Home</a>
              </li>
              <li>
                <a href="#1" class="waves-effect waves-light teal-text lighten-5">My Favorites</a>
              </li>
              <li>
                <a href="#1" class="waves-effect waves-light teal-text lighten-5">Signup/Login</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="#1" class="waves-effect waves-light teal-text lighten-5">Home</a>
          </li>
          <li>
            <a href="#1" class="waves-effect waves-light teal-text lighten-5">My Favorites</a>
          </li>
          <li>
            <a href="#1" class="waves-effect waves-light teal-text lighten-5">Signup/Login</a>
          </li>
        </ul>
      </header>
    );
  }
}