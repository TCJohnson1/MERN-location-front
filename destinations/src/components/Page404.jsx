import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class Page404 extends Component {
    render() {
        return (
           <div>
            <h1>
                404 PAGE NOT FOUND
                <Link to='/'> Home Page</Link>
            </h1>
        </div>
        )
    }
}