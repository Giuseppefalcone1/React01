import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import cars from './data/cars.json'

//miei componenti----------------------------------
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'
//fine componenti che ho creato--------------------

function App() {
  
  return(
    <>
      {/*le graffe nel fragment incapsulano codice js*/}

      {cars.map(car=>(

        <Card
          key={car.id}
          marca={car.marca}
          modello={car.modello}
          anno={car.anno}
        />
      ))

      } 
      <Navbar/>
    </>
  )
}

export default App
