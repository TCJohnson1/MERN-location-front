import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Page404 extends Component {
      render() {
      return (
            <div>
                  <Header />
                  <main>
                  <div  className='container'>
                  <center>
            <h1 className='deep-orange-text'>
                  
                  404 PAGE NOT FOUND<br/>
                        <img src='https://i.imgur.com/hwj3i2x.png?1'/>
                        <br/>
                  
                  <Link to='/'> <div className='waves-effect waves-light btn-large orange darken-4 white-text'> Home Page</div></Link>
            </h1>
            </center>
            </div>
            </main>
            <Footer />
            </div>
            )
      }
}
