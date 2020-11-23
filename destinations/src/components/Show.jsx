import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default class Show extends Component {
      constructor(props) {
            super(props)
      }
      


      
      render() {
            return (
                <>
                     <Header />
                     <div className="container">
                 <h3>{this.props.show.name}</h3>
                 <img id="showimg" src={this.props.show.image}/>
                 <p>{this.props.show.description}</p>
                  </div>
                  <Footer />
                  </>
            )
      }
}
