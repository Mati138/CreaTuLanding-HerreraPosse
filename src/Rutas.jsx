import { Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Empresa from './pages/Empresa'
import Contacto from './pages/Contacto'
import Stiker from './pages/Stiker'
import NoEncontrado from './pages/NoEncontrado'

const Rutas = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="sticker/:idSticker" element={<Stiker />} />
        <Route path="/Empresa" element={<Empresa />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
 
      
    </>
  )
}

export default Rutas
