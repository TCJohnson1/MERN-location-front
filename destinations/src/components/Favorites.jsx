import React, { Component } from 'react'
import Footer from './Footer';
import Header from './Header';

import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Favorites extends Component {
      render() {
            return (
                
                  <div>
                  <Header />
                  <div className="container">
                        <h3>Favorites</h3>

<div className='row'>
{this.props.locations.map((location, id) => {
return(
    <div key={id} className="col s12 m7">
    <h4 id="cardheader" className="header">{location.name}</h4>
    <div className="card horizontal">
      <div className="card-image">
      <img id="favoriteimg" src={location.image}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>{location.description}</p>
        </div>
        <div className="card-action">
        <a className="deep-orange-text" href="/show">view destination</a>
        </div>
      </div>
    </div>
  </div>

    )
})}
</div>

</div>
<Footer />
</div>
                 
            )
      }
}


