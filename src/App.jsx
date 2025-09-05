import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//componenti che creo io----------------------------------
import Componente1 from './components/Componente1.jsx'
import Link from './components/Link.jsx'
import Card from './components/Card.jsx'
import ListaMacchine from './components/ListaMacchine.jsx'
//fine componenti che creo io-----------------------------

function App() {
  
  return(
    <>
      <ListaMacchine/>

      {/* componente dove passo le props */}
      <Componente1
        titolo="--titolo--"
        imgURL="https://picsum.photos/200/300"
      >
      </Componente1>

      {/* componente dove passo il children */}
      <Link>
        <p>qua c'è il children</p>
      </Link>

      {/* componente Card con ren condiz */}
      <Card disponibile={true}>
      </Card>
      <Card disponibile={false}>
      </Card>

    </>
  )
}

export default App
