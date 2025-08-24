import { useState, useEffect } from 'react'
import data from '../Data/datos.json'
import '../styles/Inicio.css'
import { Link } from 'react-router-dom'

const Inicio = () => {
    const [productos, setProductos] = useState(data)

    const filtrarPorTodos = () => { 
        setProductos(data)
    }
    useEffect(() => {
        setProductos(data)
    }, [])

    const filtrarPorCategoria = (categoria) => {
        const productosFiltrados = data.filter(producto => producto.categoria === categoria)
        setProductos(productosFiltrados)
        console.log(productosFiltrados)
    }

  return (
    <>
       <div class="container">
            <div class="sidebar">
                <h2>Categorias</h2>
                <ul class="categories-nav">
                    <li>
                        <btn onClick={()=>{filtrarPorTodos()}}>Todos los productos</btn>
                    </li>
                    <li>
                    <btn onClick={()=>{filtrarPorCategoria("animales")}}>Animales</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("plantas")}}>Plantas</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("espacio")}}>Espacio</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("comida")}}>Comida</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("transporte")}}>Transporte</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("fantasia")}}>Fantasia</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("tecnología")}}>Tecnología</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("simbolos")}}>Simbolos</btn>
                    </li>
                    <li>
                        <btn onClick={()=>{filtrarPorCategoria("música")}}>Música</btn>
                    </li>
                </ul>
            </div>
            <div class="content">
                {
                    productos.map((producto) => (
                        <div class="product-card" key={producto.id}>
                            <img src={producto.imagen} alt={producto.nombre} />
                            <h3>{producto.nombre}</h3>
                            <p>{producto.descripcion}</p>
                            <p>${producto.precio}</p>

                            <Link to={`/sticker/${producto.id}`} className="btn btn-primary">Ver más</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Inicio
