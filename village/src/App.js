import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';


import './App.css';
import Header from './components/Header'
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

export default function App(props) {

  const [smurfs, setSmurfs] = useState([]);

  useEffect(()=>{
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err))
  }, [])

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  return (
    <div className="App">
      <Header />
      <Route 
        exact path="/"
        render={() =><Smurfs setSmurfs={setSmurfs} smurfs={smurfs} />}
        />
      <Route 
        path="/smurf-form"
        render={() => <SmurfForm setSmurfs={setSmurfs} />}
        />
      
    </div>
  );
}