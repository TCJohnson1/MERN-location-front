import React, { Component } from "react";
import M from  'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

export default class Header extends Component {

    componentDidMount() {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }

    render() {
        return (
            <header>
                <Router>
                <nav className="teal darken-4">
                    <div className="nav-wrapper">
                        

                        <Link to="#!" className="brand-logo teal-text lighten-5">
                            DREAM DESTINATIONS
            </Link>
                        <Link to="#1" data-target="slide-out" className="sidenav-trigger">
                            <i className="material-icons deep-orange-text accent-4">menu</i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/" className="waves-effect waves-light teal-text lighten-5">Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/favorites" className="waves-effect waves-light teal-text lighten-5">My Favorites
                                </Link>
                            </li>
                            <li>
                                <Link to="#1" className="waves-effect waves-light teal-text lighten-5">Signup/Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="slide-out">
                    <li>
                        <Link to="/" className="waves-effect waves-light teal-text lighten-5">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites" className="waves-effect waves-light teal-text lighten-5">My Favorites</Link>
                    </li>
                    <li>
                        <Link to="#1" className="waves-effect waves-light teal-text lighten-5">Signup/Login</Link>
                        
                    </li>
                </ul>
                </Router>
            </header>
        );
    }
}
