import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
//Pages to render
import NewForm from "./components/NewForm";
import Page404 from "./components/Page404";
import LandingPage from "./components/Landingpage";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const baseURL = "http://localhost:3001";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };

    this.getLocations = this.getLocations.bind(this);
    this.handleAddLocations = this.handleAddLocations.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
  }

  componentDidMount() {
    this.getLocations();
  }

  handleAddLocations(location) {
    this.setState({
      locations: this.state.locations.concat(location),
    });
  }

  getLocations() {
    fetch(baseURL + "/locations")
      .then((data) => {
        return data.json();
      })
      .then((parsedData) => {
        this.setState({
          locations: parsedData,
        });
      });
  }

  deleteLocation(id) {
    fetch(baseURL + "/locations/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.locations.findIndex(
        (location) => location._id === id
      );
      const copyLocations = [...this.state.locations];
      copyLocations.splice(findIndex, 1);
      this.setState({ locations: copyLocations });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/newdestination">
              <NewForm
                deleteLocation={this.deleteLocation}
                locations={this.state.locations}
                handleAddLocations={this.handleAddLocations}
              />
            </Route>
            <Route path="/" exact component={LandingPage} />
            <Route path="/404" component={Page404} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}
