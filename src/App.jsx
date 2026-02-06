import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Daisynav from './component/daisy/Daisynav'
import Navbar from './component/navbar/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Daisynav></Daisynav>
      </header>

      <main></main>
    </>
  )
}

export default App
