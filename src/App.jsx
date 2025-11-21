import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import cars from './data/cars.json'
import Form from './components/Form.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  
  const [carList, setCarList] = useState([])

  const addCar = (newCar) => {
    setCarList((prevList)=>[...prevList, newCar])
  }

  
  return (
    <>
    {/* Navbar */}
      <Form addCar={addCar}/>

      <ul>
        {carList.map(car => 
          <>
            <li key={car.id}></li>
            <li>{car.produttore}</li>
          </>)}
      </ul>
    </>
  )
}

export default App
