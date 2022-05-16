import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Screens
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen'
import ProductScreen from './screens/ProductScreen'

// Components
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <>
      <Navbar click={()=>setSideToggle(!sideToggle)} />
      <SideDrawer show={sideToggle} click={()=>setSideToggle(!sideToggle)} />
      <Backdrop show={sideToggle} click={()=>setSideToggle(!sideToggle)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/product/:id" element={<ProductScreen/>} />
          <Route exact path="/cart" element={<CartScreen/>} />
        </Routes>
      </main>
    </>
  )
}

export default App
