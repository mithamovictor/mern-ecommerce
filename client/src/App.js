// import { Routes, Route } from 'react-router-dom'
import './App.css'

// Screens
// import HomeScreen from './screens/HomeScreen'
// import CartScreen from './screens/CartScreen'
// import ProductScreen from './screens/ProductScreen'

// Components
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <h2>Hello</h2> */}
      {/* <Navbar click={()=>setSideToggle(!sideToggle)} />
      <SideDrawer show={sideToggle} click={()=>setSideToggle(!sideToggle)} />
      <Backdrop show={sideToggle} click={()=>setSideToggle(!sideToggle)} />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/product/:id" element={<ProductScreen/>} />
          <Route exact path="/cart" element={<CartScreen/>} />
        </Routes>
      </main> */}
    </>
  )
}

export default App
