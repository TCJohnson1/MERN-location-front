import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewForm from './components/NewForm'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import LandingPage from "./components/Landingpage";
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
              <Router>
                <Switch>
                  <Route exact path='/newdestination'>
                    <NewForm
                    locations={this.state.locations}
                    handleAddLocations={this.handleAddLocations} />
                  </Route>
                  <Route exact path='/' component={LandingPage}/>

                </Switch>

              </Router>
      </div>
    );
  }
}