
import { BrowserRouter } from 'react-router-dom'
import Rutas from './Rutas'
import Navbar from './Components/NavBar/NavBar'
import { CartProvider } from './context/cartContext.jsx'
function App() {


  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Rutas />
      </BrowserRouter>
    </CartProvider>

    </>
  )
}

export default App
