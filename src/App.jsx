import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar'
import Header from './components/header'

function App() {

  return (
    <div>
      <BrowserRouter>
         <NavBar />
      </BrowserRouter>
   
      {/* <NavBar /> */}
      {/* <Header /> */}
    </div>
  )
}

export default App
