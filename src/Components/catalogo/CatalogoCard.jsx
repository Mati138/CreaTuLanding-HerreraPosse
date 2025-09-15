import { Link } from "react-router-dom"
import "../../Styles/catalogo.css"

const CatalogoCard = ({productos}) =>{
    return(
        <>
            <article className="card">
                <img src="https://via.placeholder.com/260x180.png?text=Producto" alt={productos.nombre}/>
                <div className="card-content">
                    <h3 className="card-title">{productos.nombre}</h3>
                    {/* <p class="card-description">
                       {productos.descripcion}
                    </p> */}
                    <div className="price-stock">
                        <span className="price">${productos.precio}</span>
                        <span className="stock">Stock: {productos.stock}</span>
                    </div>
                    <Link to={`/sticker/${productos.id}`} className="btn">Ver calco</Link>
                </div>
            </article>
        </>
    )
}
export default CatalogoCard


// id, img, nombre, precio, stock, descripcion, categoria

