import React, {useState, useEffect} from 'react'
import '../styles/Map.css'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import countries from '../data/countriesLocation.json'

const countriesArray = countries.countries 

function Map() {
  const apiMeal = process.env.REACT_APP_API_MEAL

  const [countries, setCountries] = useState([])

  const getData = async () => {
    try {
      const fetchito = await (await fetch(`${apiMeal}/list.php?a=list`)).json()
      setCountries(fetchito)
    } catch (error) {
      console.log('Error en getData', error);
    }
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <MapContainer center={[35.75, 4.25]} zoom={2} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countriesArray.map((country) => (
            <Marker position={[country.coordinates.latitude, country.coordinates.longitude]}></Marker>
        ))}
    </MapContainer>
    </>
  )
}

export default Map