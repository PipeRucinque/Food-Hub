import React from 'react'
import '../styles/Map.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import countries from '../data/countriesLocation.json'
import PopupList from '../components/PopupList'

const countriesArray = countries.countries 

function Map() {
  
  return (
    <>
      <MapContainer center={[35.75, 4.25]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countriesArray.map((country) => (
            <Marker position={[country.coordinates.latitude, country.coordinates.longitude]}>
              <Popup key={country.strArea}>
                <PopupList country={country.strArea}/>
              </Popup>
            </Marker>
        ))}
    </MapContainer>
    </>
  )
}

export default Map