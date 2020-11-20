import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }
  toggleFavorite() {
    this.setState({ favorite: true });
  }
  render() {
    return (
      <tr
        key={this.props.index}
        onClick={() => {
          this.props.addFavoriteLocation(this.props.location);
          this.toggleFavorite();
        }}
      >
        <td onDoubleClick={() => this.props.handleDelete(this.props.index)}>
          {this.props.location.name}
        </td>
        <td>{this.props.location.description}</td>
        <td>{this.props.location.image}</td>
        {this.state.favorite ? <td>&hearts;</td> : <td></td>}
      </tr>
    );
  }
}
