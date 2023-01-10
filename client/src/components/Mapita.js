import React from 'react'
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import country from '../data/countriesLocation.json'

const countries = country.countries

const styles = {
    width: '220px',
    height: '220px',
    borderRadius: '5px',
    boxShadow: '6px 10px 10px black',
  }

const Mapita = ({origin}) => {
    const origen = countries.find((country) => country.strArea === origin)

    if (!origen) return null
    return (
    <div>
        <MapContainer  
            center={[origen.coordinates.latitude, origen.coordinates.longitude]}
            zoom={1.5}
            scrollWheelZoom={false}
            style={styles}
            >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        <Marker position={[origen.coordinates.latitude, origen.coordinates.longitude]}></Marker>
        </MapContainer>
    </div>
    )
}

export default Mapita