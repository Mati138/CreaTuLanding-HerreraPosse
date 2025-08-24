//Componentes
import CartWidget from '../Cart/CartWidget'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">Craft Store</div>
        <ul className="navLinks">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/empresa" className={({ isActive }) => (isActive ? 'active' : '')}>
              Empresa
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto" className={({ isActive }) => (isActive ? 'active' : '')}>
              Contacto
            </NavLink>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  )
}


export default Navbar
