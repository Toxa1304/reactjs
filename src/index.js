import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Axios from 'axios';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function getAPI(){
//   const [planet, setPlanet] = useState("");
//     const getPlanet = () => {
//       Axios.get('https://swapi.dev/api/planets/1')
//       .then((json)=>{console.log(json);
//       setPlanet(json.data)})
//     };
//     getPlanet();
//     console.log(planet);
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
