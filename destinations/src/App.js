import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewDestination from './components/NewDestination.js'
const baseURL = "http://localhost:3001";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
  
    this.getLocations = this.getLocations.bind(this)
    this.handleAddLocations = this.handleAddLocations.bind(this)
  }

  componentDidMount() {
    this.getLocations()
  }

  handleAddLocations(location) {
    this.setState({
      locations: this.state.locations.concat(location)
    })
  }

  getLocations() {
    fetch(baseURL + '/locations')
    .then(data => {
      return data.json()
    }).then(parsedData => {
      this.setState({
        locations: parsedData
      })
    })
  }

  render() {
    return (
      <div>
        <Header />

        <main>
        <div  className="container">
          <div className="my-list-button">
            <button
              id="my-list-button"
              className="btn waves-effect waves-orange darken-4"
              type="submit"
              name="action"
            >
              My List
            </button>
          </div>
          <div className="cool-image">
            <img
              id="cool-image"
              src="https://cdn.pixabay.com/photo/2016/06/25/12/48/go-pro-1478810_1280.jpg"
              alt="luggage"
            ></img>
          </div>
          <hr className="horizontal-bar"></hr>
          <div>
         
          <NewDestination handleAddLocations={this.handleAddLocations} />
        <table className="centered">
        <thead>
          <tr>
              <th>Name</th>
              <th>description</th>
          </tr>
        </thead>
          <tbody>
            {
              this.state.locations.map(location => {
                return (
                  <tr>
                    <td key={location._id}> <p>{location.name}</p> </td>
                    <td key={location._id}> <p>{location.description}</p> </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

</div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
