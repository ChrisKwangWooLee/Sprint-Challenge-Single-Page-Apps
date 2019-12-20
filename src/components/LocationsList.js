import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard'

export default function LocationsList() {
    const [locationsData, setLocationData] = useState([])
    useEffect(()=> {
        axios.get("https://rickandmortyapi.com/api/location/")
        .then(response => {
          console.log(response.data.results);  // array
          setLocationData(response.data.results)
        })
        .catch(err => {
          console.log("Error", err);
        })
      }, [])
  
    return (
      <section className="character-list">
          {locationsData.map( (location, index) => {
              return <LocationCard 
              name={location.name}
              type={location.type}
              dimension={location.dimension} 
              residents={location.residents}
              key={index} 
              />
          })}
      </section>
    );
}
