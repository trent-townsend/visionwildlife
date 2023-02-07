import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar'
import Header from './components/header'

function App() {

  return (
    <div>
    <NavBar style={{zIndex:1}}/>
    <Header style={{zIndex:0}}/>
    </div>
  )
}

export default App
