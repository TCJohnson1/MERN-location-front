import React, { Component } from "react";
import Header from "./Header";
import Footer from './Footer'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const baseURL = "http://localhost:3001";

export default class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      image: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(baseURL + "/locations", {
      method: "POST",
      body: JSON.stringify({ name: this.state.name, description: this.state.description, image: this.state.image}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.props.handleAddLocations(data);
        this.setState({
          name: '',
          description: '',
          image: '',
        });
      });
  }

  render() {
    return (
        <>
        <Header/>
        <Router>
            <Link to='/' > GO HOME</Link>
        </Router>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="name"
        />

        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={this.handleChange}
          value={this.state.description}
          placeholder="description"
        />

        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          name="image"
          onChange={this.handleChange}
          value={this.state.image}
          placeholder="image"
        />
        <input type="submit" value="Add Destination" />
      </form>
      <table className="centered">
      <thead>
        <tr>
          <th>Name</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
        {
          this.props.locations.map(location => {
            return (
              <tr key ={location._id}>
                <td> <p>{location.name}</p> </td>
                <td> <p>{location.description}</p> </td>
                <td> <img src={location.image} alt={location.name}></img></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    <Footer />
    </>
    );
  }
}