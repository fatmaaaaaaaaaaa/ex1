import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nom from './Nom'
import Greeting from './Greeting';

function App() {
  
  return (
    <>
      <div>
        <h1>Bonjour c'est ma premiere application react</h1>
      </div>
      <Nom/>
     <Greeting/>

    </>
  );
}

export default App
