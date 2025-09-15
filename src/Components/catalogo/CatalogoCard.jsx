import "../../Styles/catalogo.css"

const CatalogoCard = ({productos}) =>{
    return(
        <>
            <article className="card">
                <img src="https://via.placeholder.com/260x180.png?text=Producto" alt="Producto"/>
                <div class="card-content">
                    <h3 class="card-title">{productos.nombre}</h3>
                    <p class="card-description">
                       {productos.descripcion}
                    </p>
                    <div class="price-stock">
                        <span class="price">${productos.precio}</span>
                        <span class="stock">Stock: {productos.stock}</span>
                    </div>
                    <button class="btn">Agregar al carrito</button>
                </div>
            </article>
        </>
    )
}
export default CatalogoCard


// id, img, nombre, precio, stock, descripcion, categoria

