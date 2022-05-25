import React, {useState, useEffect, component} from 'react'
//import React, { Component } from 'react';  
//import axios from 'axios'

 export default function DataFetching() {
    let url = 'https://swapi.dev/api/planets/';
     //let name, RotationPeriod, OrbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population;
     
     const [data, setData] = useState([{}]);

     useEffect(() =>{
        let planetData = fetch(url+'1')
       .then(response => response.json())
       .then(json =>{
         //console.log(json.name);
        
         let data1 = [{
           name: json.name,
           rotation_period: json.rotation_period,
           orbital_period: json.orbital_period,
           diameter: json.diameter_period,
           climate: json.climate,
           gravity: json.gravity,
           terrain: json.terrain,
           surface_water: json.surface_water,
           population: json.population
         }];
         setData(data1);
         console.log(data);
         return data1;
        })
     }, [])
     
         
    //   return (
    //     <div>dataFetching</div>
    //)
            
    }
    //export default DataFetching


