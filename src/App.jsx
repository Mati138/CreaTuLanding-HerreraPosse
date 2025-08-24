
import { BrowserRouter } from 'react-router-dom'
import Rutas from './Rutas'
import Navbar from './Components/NavBar/NavBar'
function App() {


  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Rutas />
    </BrowserRouter>

    </>
  )
}

export default App
