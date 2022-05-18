import { useState } from "react"
import { Link } from "react-router-dom"
// import { useSelector } from 'react-redux'

const Navbar = () => {
  const [sideToggle, setSideToggle] = useState(false)
  // const cart =  useSelector(state=>state.cart)
  // const { cartItems } = cart

  const toggleNavBar = (e) => {
    e.preventDefault()
    const backdropClassList = document.getElementById("backdrop").classList
    const sidedrawerClassList = document.getElementById("sidedrawer").classList
    if(!sideToggle) {
      backdropClassList.replace("hidden", "flex")
      sidedrawerClassList.replace("hidden", "flex")
      sidedrawerClassList.replace("animate__slideOutLeft", "animate__slideInLeft")
    } else {
      sidedrawerClassList.replace("animate__slideInLeft", "animate__slideOutLeft")
      setTimeout(()=>{
        backdropClassList.replace("flex", "hidden")
        sidedrawerClassList.replace("flex", "hidden")
      }, 1000)
    }
    setSideToggle(!sideToggle)
  }
  return (
    <>
      <nav className="hidden md:flex p-4">
        <ul className="flex text-white">
          <li>
            <Link className="px-4" to="/">Shop</Link>
          </li>
          <li>
            <Link className="px-4" to="/account">Account</Link>
          </li>
          <li>
            <Link className="px-4 pr-0" to="/cart">
              Cart
              <span className="relative p-4">
                <i className="fa-brands fa-opencart"></i>
                <span className="flex justify-center items-center absolute top-0 right-0 w-5 h-5 rounded-full bg-white text-xs text-slate-900">0</span>
                {/* <span className="flex justify-center items-center absolute top-0 right-0 w-5 h-5 rounded-full bg-white text-xs text-slate-900">{getCartCount()}</span> */}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex md:hidden p-4">
        <i className="fa-solid fa-bars text-white text-2xl" onClick={toggleNavBar}></i>
      </div>
      <div id="backdrop" className="min-h-screen min-w-full absolute top-0 left-0 z-10 bg-black opacity-20 hidden" onClick={toggleNavBar}></div>
      <div id="sidedrawer" className="min-h-screen w-3/4 absolute top-0 left-0 z-10 bg-slate-900 hidden animate__animated animate__slideOutLeft" onClick={toggleNavBar}>
        <ul className="flex flex-col justify-center items-center w-full text-white">
          <li className="flex justify-center items-center w-full">
            <Link className="py-6 hover:bg-slate-800 text-center border-0 border-t border-b border-gray-600 w-full" to="/">Shop</Link>
          </li>
          <li className="flex justify-center items-center w-full">
            <Link className="py-6 hover:bg-slate-800 text-center border-0 border-b border-gray-600 w-full" to="/account">Account</Link>
          </li>
          <li className="flex justify-center items-center w-full">
            <Link className="py-6 hover:bg-slate-800 text-center border-0 border-b border-gray-600 w-full pr-0" to="/cart">
              Cart
              <span className="relative p-4">
                <i className="fa-brands fa-opencart"></i>
                <span className="flex justify-center items-center absolute top-0 right-0 w-5 h-5 rounded-full bg-white text-xs text-slate-900">0</span>
                {/* <span className="flex justify-center items-center absolute top-0 right-0 w-5 h-5 rounded-full bg-white text-xs text-slate-900">{getCartCount()}</span> */}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
