import React, { Component } from "react";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer teal darken-4">
        <div className="container">
          <div className="row">
            <div className="col l4 s12">
              <h5 className="deep-orange-text accent-4">About</h5>
              <p className="teal-text lighten-5">
                Dream Destinations was created as our third project for General
                Assembly's Software Engineering Immersive program. We decided to
                use the MERN stack to develop an application to save a users
                favorite destinations to a bucket list.
              </p>
            </div>
            <div className="col l4 s12">
              <h5 className="deep-orange-text accent-4">Documentation</h5>
              <ul>
                <li>
                  <a
                    className="waves-effect waves-light btn-flat teal-text lighten-5"
                    href="https://github.com/TCJohnson1/MERN-location-front"
                  >
                    Front-end
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn-flat teal-text lighten-5"
                    href="https://github.com/davidornelas11/MERN-location-app"
                  >
                    Back-end
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l4 s12">
              <h5 className="deep-orange-text accent-4">Meet the Team!</h5>
              <ul>
                <li>
                  <a
                    className="waves-effect waves-light btn-flat teal-text lighten-5"
                    href="http://linkedin.com/in/davidornelas-engineer"
                  >
                    David Ornelas
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn-flat teal-text lighten-5"
                    href="https://www.linkedin.com/in/fabiolampina/"
                  >
                    Fabiola Pina
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn-flat teal-text lighten-5"
                    href="https://www.linkedin.com/in/sarakendig/"
                  >
                    Sara Kendig
                  </a>
                </li>
                <li>
                  <a
                    className="waves-effect waves-light btn-flat teal-text lighten-5"
                    href="https://www.linkedin.com/in/terrence-c-johnson2/"
                  >
                    Terrence Johnson
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright  teal darken-3 valign center">
          <div className="container teal-text lighten-5">
            © 2020 All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}
