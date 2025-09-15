import { Routes, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Stiker from './pages/Stiker'
import NoEncontrado from './pages/NoEncontrado'

const Rutas = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/catalogo/:categoriaId" element={<Catalogo />} />
        <Route path="sticker/:idSticker" element={<Stiker />} />
        <Route path="*" element={<NoEncontrado />} />
      </Routes>
    </>
  )
}

export default Rutas
