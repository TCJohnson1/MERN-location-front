import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default class Show extends Component {
      
      render() {
            return (
                <div>
                     <Header />
                  <div className="container">
                 <h3>{this.state.location.name}</h3>
                 <img id="showimg" src={this.state.location.image}/>
                 <p>{this.state.location.description}</p>
                  </div>
                  <Footer />
                  </div>
            )
      }
}
