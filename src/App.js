import React, { Component } from 'react';  
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
  
class App extends Component {  

 


  render() {  
    let planetData;
    let url = 'https://swapi.dev/api/planets/2';
    let name, RotationPeriod, OrbitalPeriod, diameter, climate, gravity, terrain, surfaceWater, population;
    fetch(url)
      .then(response => response.json())
      .then(json =>{
        console.log(json.name);
        console.log(json.population)

      }) 
      

    
    //console.log(json. );
 
     const data1 = [{  
        name: 'Ayaan',  
        age: 26,
        sex: 'male'  
        },{  
         name: 'Ahana',  
         age: 22,  
         sex: 'male'  
         },{  
         name: 'Peter',  
         age: 40 ,
         sex: 'male'       
         },{  
         name: 'Virat',  
         age: 30  ,
         sex: 'male'  
         },{  
         name: 'Rohit',  
         age: 32  ,
         sex: 'male'  
         },{   
         name: 'Dhoni',  
         age: 37  ,
         sex: 'male'  
         }]  
     const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Age',  
       accessor: 'age'  
       },{  
        Header: 'Sex',  
        accessor: 'sex'  
        }]   
    return (  
          
          <div>  
              <ReactTable  
                  data={data1}  
                  columns={columns}  
                  defaultPageSize = {6}  
                  pageSizeOptions = {[2,4, 6]}  
                 
              />  
          </div>        
    )  
  }  
}  
export default App;  