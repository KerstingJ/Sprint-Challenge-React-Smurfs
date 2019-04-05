import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';


const Smurf = props => {

  function deleteSmurf(event, id){
    event.preventDefault();
    Axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => props.setSmurfs(res.data))
      .catch(err => console.log(err))
  }

  
  return (
    <SmurfContainer className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={event => deleteSmurf(event, props.id)}>Delete</button>
    </SmurfContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

const SmurfContainer = styled.div`
  display: inline-block;
  padding: 3rem;
  margin: 2rem;

  border-radius: 5px;
  border: 1px solid black;
`

export default Smurf;

