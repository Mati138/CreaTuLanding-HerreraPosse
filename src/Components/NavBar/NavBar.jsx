//Componentes
import CartWidget from '../Cart/CartWidget'

import './navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">Craft Store</div>
        <ul className="navLinks">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Productos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  )
}


export default Navbar
