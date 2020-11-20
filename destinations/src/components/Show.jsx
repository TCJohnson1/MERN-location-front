import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default class Show extends Component {
      constructor(props) {
            super(props)
            this.state = {
                  favorite: false
            }
            this.toggleFavorite = this.toggleFavorite.bind(this)
      }
      toggleFavorite() {
            this.setState({favorite: true})
      }
      render() {
            return (
                <div>
                     <Header />
                  <div className="container">
                  <tr key={ this.props.index }
                        onClick={ ()=> { this.props.addFavoriteLocation(this.props.location); this.toggleFavorite() }}>
                        <td onDoubleClick={() => this.props.handleDelete(this.props.id)} >{ this.props.locations.name }</td>
                        <td>{ this.props.locations.description }</td>
                        <td>{ this.props.locations.image }</td>
                        {this.state.favorite ? <td>&hearts;</td> : <td></td>}
                  </tr>
                  </div>
                  <Footer />
                  </div>
            )
      }
}
