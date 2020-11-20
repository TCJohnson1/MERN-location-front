import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Page404 extends Component {
    render() {
        return (
           <div>
               <Header />
            <h1>
                PAGE NOT FOUND <br/>
                <Link to='/'> <div className='waves-effect waves-light btn-large '> Home Page</div></Link>
            </h1>
            <Footer />
        </div>
        )
    }
}