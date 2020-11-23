<<<<<<< HEAD
import React, { Component } from "react";

export default class Show extends Component {
  render() {
    return (
      <div>
        <h1>Testing</h1>
      </div>
    );
  }
=======
import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default class Show extends Component {
 

      render() {
            return (
                <>
                     <Header />

                  <div className="container">
                 <h3>{this.props.locations.name}</h3>
                 <img id="showimg" src={this.props.locations.image}/>
                 <p>{this.props.locations.description}</p>
                  </div>

                 

                  <Footer />
                 </>
            )
      }
>>>>>>> 22bdf9867e8bee2aa2be76db182687a0f8134a7d
}
