import { Link } from "react-router-dom"

// Components
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex justify-between bg-slate-900 relative p-6">
      <div className="logo_container p-4">
        <Link to="/">
          <h2 className="text-lg text-white">MERN E-Commerce</h2>
        </Link>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
