import React, { Component } from 'react'

export default class Favorites extends Component {
      render() {
            return (
                  <div>
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
                                    {this.props.location.map((location, index) => {
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
                  </div>
            )
      }
}


export default FavoriteLocations