import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default class Favorites extends Component {
      render() {
            return (
                  <div>
                      <Header />
                        <h3>Favorites</h3>
                        <table>
                              <thead>
                                    <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {this.props.locations.map((location, index) => {
                                          return(
                                                <tr key={index}>
                                                      <td>{location.name}</td>
                                                      <td>{location.description}</td>
                                                      <td>{location.image}</td>
                                                </tr>
                                          )
                                    })}
                              </tbody>
                        </table>
                        <Footer />
                  </div>
            )
      }
}


