import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/home'
import Header from './components/header/header'
import { Outlet } from 'react-router-dom'
function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cart = {cart}/>
      <Outlet context = {[cart, setCart]}/>
    </>
  )
}

export default App
