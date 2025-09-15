
import { useParams } from 'react-router-dom' 
import data from '../Data/datos.json'



const Stiker = () => {
  
  const { idSticker } = useParams()
  const sticker = data.find(stick => stick.id === parseInt(idSticker)) // Creo que esta linea de código no necesita que este dentro de un useEffect porque no se hace un fetch, no hay tabajo asincrono.

  return (
    <>
    <main class="product-page">
      {
        sticker ? (
          <>
        <div class="product-image">
          <img src={sticker.img} alt={sticker.nombre}/>
        </div>
        <div class="product-info">
          <h1>{sticker.nombre}</h1>
          <span class="category">{sticker.categoria}</span>
          <p class="price">${sticker.precio}</p>
          <button class="buy-btn">Agregar al carrito</button>
        </div>
      </>
        ) : (
          <div className="not-found">
            <h2>Sticker no encontrado</h2>
          </div>
        )
      }
    </main>
    </>
  )
}

export default Stiker
