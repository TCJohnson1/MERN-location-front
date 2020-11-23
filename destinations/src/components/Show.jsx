import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default class Show extends Component {
<<<<<<< HEAD
      
=======
      constructor(props) {
            super(props)
            this.state = {
                  favorite: false
            }
            this.toggleFavorite = this.toggleFavorite.bind(this)
      }
      toggleFavorite() {
            console.log(this.state.favorite)
      }
>>>>>>> c26221b0ff2b95dc0cee4c1e403cd5dd6514a569
      render() {
            return (
                <>
                     <Header />
<<<<<<< HEAD
                  <div className="container">
                 <h3>{this.state.location.name}</h3>
                 <img id="showimg" src={this.state.location.image}/>
                 <p>{this.state.location.description}</p>
                  </div>
=======
                  <table>
                  <tr key={ this.props.id }
                        onClick={ ()=> { this.props.addFavoriteLocation(this.props.location); this.toggleFavorite() }}>
                        <td onDoubleClick={() => this.props.handleDelete(this.props.id)} >{ this.props.locations.name }</td>
                        <td>{ this.props.locations.description }</td>
                        <td>{ this.props.locations.image }</td>
                        {this.state.favorite ? <td>&hearts;</td> : <td></td>}
                  </tr>
                  </table>
>>>>>>> c26221b0ff2b95dc0cee4c1e403cd5dd6514a569
                  <Footer />
                  </>
            )
      }
}
