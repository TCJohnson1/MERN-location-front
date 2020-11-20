import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Maps from './components/Maps'


export default class App extends Component {

  constructor (props) { //Google Map API
    super(props)
    this.state = {
      name: '',
      image: '',
      review: '',
      rating: '',
      favotires: []
    }
  }
  //The first API will pull the information and have the geo location. We can then pull that geotag and plug it into the Google maps API to show the pin. Google-maps-react

  render() {
    return (

      <div>

      <Header />
      
        <main>
        <h1> MERN Destinations</h1>
        <Maps />
        </main>

        <Footer />
    
        
      </div>
      
    )
  }
}