import { useState, useEffect } from 'react';
import PatientList from './PatientList';
import Physician from './Physician';
import './App.css'

function App() {
  const [physicians, setPhysicians] = useState([]);
  // const [state, useState] = useState('show');
  
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://localhost:3000/physicians')
      response = await response.json()
      // console.log(response)
      setPhysicians(response)

    }
    fetchMyAPI()
  }, [])
  const handleClick = () => {
    console.log('not operational')
  }

  return (
    <div className="physician-app">
      <h1> Notable </h1>
      {physicians.map((physician, index) =>    
      <Physician 
        key={index}
        firstName={physician.firstName}
        lastName={physician.lastName}
        
      />
      )}
      <PatientList physicians={physicians}/>
        <button onClick={handleClick} className='logout-button'>Logout</button>
    </div>
  );
}

export default App;
