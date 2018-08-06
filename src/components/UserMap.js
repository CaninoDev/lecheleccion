import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import '../assets/MapPane.css'

function UserMap (props) {
  const position = [props.geolocation.latitude, props.geolocation.longitude]
  return (
    <Map center={position} zoom='13'>
      <TileLayer
        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  )
}

export default UserMap