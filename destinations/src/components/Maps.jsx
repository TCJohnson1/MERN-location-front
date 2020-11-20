import React, { Component } from 'react'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

const GOOGLE_MAP_API_KEY = process.env.REACT_APP_GOOGLE_KEY
function Map(){
      return (
            <GoogleMap 
            defaultZoom = {15}
            defaultCenter = {{lat: 30.266666, lng: -97.733330}}
            />
      )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default class Maps extends Component {
      render() {
            return (
                  <div style={{width: '40vw', height: '40vh'}}>
                  <WrappedMap 
                  googleMapURL= {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_MAP_API_KEY}`}
                  loadingElement = {<div style= {{height: '100%'}} />}
                  containerElement = {<div style= {{height: '100%'}} />}
                  mapElement = {<div style= {{height: '100%'}} />}
                  />
                  </div>
            )
      }
}
