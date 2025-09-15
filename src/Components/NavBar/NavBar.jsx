//Componentes
import CartWidget from '../Cart/CartWidget'
import { NavLink, Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <Link className="logo" to="/">
          Craft Store
        </Link>
        <ul className="navLinks">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalogo" className={({ isActive }) => (isActive ? 'active' : '')}>
              Catálogo
            </NavLink>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  )
}


export default Navbar
