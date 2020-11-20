import React, { Component } from "react";
import Header from "./Header";
import Footer from './Footer'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                image: this.state.image
            }),
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
                <Header />
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
                    <input className='waves-effect waves-light btn-large' type="submit" value="Add Destination" />
                </form>
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        { // Renders locations if there are any. If not, it tells user to add some
                            (this.props.locations.length > 0) ? (
                                this.props.locations.map(location => {
                                return (
                                    <tr key={location._id}>
                                        <td> <p>{location.name}</p> </td>
                                        <td> <p>{location.description}</p> </td>
                                        <td> <img src={location.image} alt={location.name}></img></td>
                                        <td className='waves-effect waves-light btn-large red accent-4' onClick={() => {
                                            this.props.deleteLocation(location._id);
                                            }}>
                                                DELETE 
                                                </td>
                                    </tr>
                                )
                            })
                            ) : ( <div className="row">
                            <div className="col s12 m5">
                              <div className="card-panel brown lighten-3">
                                <span className="white-text">No locations to display. Try Adding one with the form above
                                </span>
                              </div>
                            </div>
                          </div>)
                        }
                    </tbody>
                </table>
                <Footer />
            </>
        );
    }
}