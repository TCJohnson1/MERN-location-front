import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'


export default class App extends Component {

  constructor (props) { //Google Map API
    super(props)
    this.state = {
      // baseURL: 'http://www.xxxxxxx.com/?',
      // apikey: 'apikey=' + 'xxxxxxx',
      // query: '&t=',
      // locationTitle: '',
      // searchURL: '',
      // location: {}
      name: '',
      description: '',
      image: '',
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
        </main>

        <Footer />
    
        
      </div>
      
    )
  }
}