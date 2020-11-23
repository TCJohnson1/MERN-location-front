import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
//Pages to render
import NewForm from "./components/NewForm";
import Page404 from "./components/Page404";
import LandingPage from "./components/Landingpage";
import Favorites from "./components/Favorites";
import Show from "./components/Show";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const baseURL = "http://localhost:3001";

<<<<<<< HEAD
=======

>>>>>>> 22bdf9867e8bee2aa2be76db182687a0f8134a7d
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };

<<<<<<< HEAD
    this.getLocations = this.getLocations.bind(this);
    this.handleAddLocations = this.handleAddLocations.bind(this);
    this.deleteLocation = this.deleteLocation.bind(this);
=======
    this.getLocations = this.getLocations.bind(this)
    this.handleAddLocations = this.handleAddLocations.bind(this)
    this.deleteLocation = this.deleteLocation.bind(this)
    this.toggleFavorite = this.toggleFavorite.bind(this)
    this.showLocation = this.showLocation.bind(this)
>>>>>>> 22bdf9867e8bee2aa2be76db182687a0f8134a7d
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

  toggleFavorite = (location) => {
    fetch(baseURL + '/locations/' + location._id, {
      method: 'PUT',
      body: JSON.stringify({favorite: !location.favorite}),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      const copyLocations = [...this.state.locations]
      const findIndex = this.state.locations.findIndex(location => location._id === resJson._id)
      copyLocations[findIndex].favorite = resJson.favorite
      this.setState({locations: copyLocations})
    })
}


showLocation(id) {
  fetch(baseURL + '/locations/' + id, {
    headers: {
      'Content-Type' : 'application/json'
    }
  }).then(res => res.json())
  .then(resJson => {
    const copyLocations = [...this.state.locations]
    const findIndex = this.state.locations.findIndex(location => location._id === resJson._id)
    copyLocations[findIndex].favorite = resJson.favorite
    this.setState({locations: copyLocations})
  })
}


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/newdestination">
              <NewForm
              toggleFavorite={this.toggleFavorite}
                deleteLocation={this.deleteLocation}
                locations={this.state.locations}
                handleAddLocations={this.handleAddLocations}
              />
            </Route>
<<<<<<< HEAD
            <Route path="/" exact component={LandingPage} />
            <Route path="/404" component={Page404} />
            <Redirect to="/404" />
=======
            <Route path='/' exact component={LandingPage} />
            <Route path='/favorites'  >
              <Favorites
              locations = {this.state.locations}
              />
            </Route>
            <Route path='/show' exact >
            <Show
            locations = {this.state.locations}
            />
            </Route>
            <Route path='/404' component={Page404} />
            <Redirect to='/404' />

>>>>>>> 22bdf9867e8bee2aa2be76db182687a0f8134a7d
          </Switch>
        </div>
      </Router>
    );
  }
}