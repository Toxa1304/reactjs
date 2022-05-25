import { wait } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';  
import ReactTable from "react-table-6";  
import Axios from 'axios';
import "react-table-6/react-table.css" 
import DataFetching from './dataFetching';
 
class App extends Component {  
  
  render() {   
    const data = DataFetching();
    //one planet for now
    //for(let i=1; i<61; i++){
      //let data1;
      // let url = 'https://swapi.dev/api/planets/';
      // let name, RotationPeriod, OrbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population;
      // let planetData = fetch(url+'1')
      //   .then(response => response.json())
      //   .then(json =>{
      //     //console.log(json.name);
          
      //     data1 = [{
      //       name: json.name,
      //       rotation_period: json.rotation_period,
      //       orbital_period: json.orbital_period,
      //       diameter: json.diameter_period,
      //       climate: json.climate,
      //       gravity: json.gravity,
      //       terrain: json.terrain,
      //       surface_water: json.surface_water,
      //       population: json.population
      //     }]
      //     return data1;
          
      //   });
        // const printPlanet = async () => {
        //   data1 = await planetData;
        //   return data1;
        // };
        //data1= printPlanet();
        
    //}
    
      

      //console.log(data1);
    //console.log(json. );
    // data1 = [{
    //   name: json.name,
    //   rotation_period: json.rotation_period,
    //   orbital_period: json.orbital_period,
    //   diameter: json.diameter_period,
    //   climate: json.climate,
    //   gravity: json.gravity,
    //   terrain: json.terrain,
    //   surface_water: json.surface_water,
    //   population: json.population
    // }]
    //  data1 = [{  
    //     name: 'Ayaan',  
    //     rotation_period: 26,
    //     orbital_period: 'male'  
    //     }]  
     const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Rotation period',  
       accessor: 'rotation_period'  
       },{  
        Header: 'Orbital period',  
        accessor: 'orbital_period'  
        },{  
          Header: 'Diameter',  
          accessor: 'diameter'  
        },
        {  
          Header: 'Climate',  
          accessor: 'climate'  
        },
        {  
          Header: 'Gravity',  
          accessor: 'gravity'  
        },
        {  
          Header: 'Terrain',  
          accessor: 'terrain'  
        },
        {  
          Header: 'Surface water',  
          accessor: 'surface_water'  
        },
        {  
          Header: 'Population',  
          accessor: 'population'  
        }
        ]   
    return (  
          
          <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {6}  
                  pageSizeOptions = {[2,4, 6]}  
                 
              />  
          </div>        
    )  
  }  
}  
export default App;  