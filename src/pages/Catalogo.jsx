
import { NavLink } from "react-router-dom"
import CatalogoContainer from "../Components/catalogo/catalogoContainer"


import '../Styles/catalogo.css'

const Catalogo = () => {
  return (
    <>
      <ul className="navCatalogo">
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/animales" className={({ isActive }) => (isActive ? 'active' : '')}>
              Animales
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/plantas" className={({ isActive }) => (isActive ? 'active' : '')}>
             Plantas
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/espacio" className={({ isActive }) => (isActive ? 'active' : '')}>
              Espacio
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/comida" className={({ isActive }) => (isActive ? 'active' : '')}>
              Comida
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/transporte" className={({ isActive }) => (isActive ? 'active' : '')}>
              Transporte
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/fantasia" className={({ isActive }) => (isActive ? 'active' : '')}>
              Fantasia
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/tecnologia" className={({ isActive }) => (isActive ? 'active' : '')}>
              Tecnología
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/simbolos" className={({ isActive }) => (isActive ? 'active' : '')}>
              Simbolos
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/musica" className={({ isActive }) => (isActive ? 'active' : '')}>
              Música
            </NavLink>
          </li>
          <li className="navCatalogo-item">
            <NavLink to="/catalogo/naturaleza" className={({ isActive }) => (isActive ? 'active' : '')}>
              Naturaleza
            </NavLink>
          </li>
      </ul>
      <section>
        <CatalogoContainer />
      </section>
    </>
  )
}

export default Catalogo