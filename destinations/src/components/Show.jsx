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
}
