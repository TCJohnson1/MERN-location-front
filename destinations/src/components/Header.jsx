import React, { Component } from "react";
import M from  'materialize-css/dist/js/materialize.min.js';

export default class Header extends Component {

    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
      }

  render() {
    return (
      <header>
        <nav class="teal darken-4">
          <div class="nav-wrapper">
          
            <a href="#!" class="brand-logo teal-text lighten-5">
                  DREAM DESTINATIONS
            </a>
            <a href="#1" data-target="slide-out" class="sidenav-trigger">
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

        <ul class="sidenav" id="slide-out">
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
