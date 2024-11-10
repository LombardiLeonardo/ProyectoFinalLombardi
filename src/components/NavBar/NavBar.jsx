import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom"

import "./navbar.css"

const NavBar = () => {

  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/remeras" className="text-link">Pastas</Link>
        </li>
        <li className="category">
          <Link to="/category/pantalones" className="text-link" >Pizza</Link>
        </li>
        <li className="category">
          <Link to="/category/zapatillas" className="text-link">Carnes</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand ">Pizza Box</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar