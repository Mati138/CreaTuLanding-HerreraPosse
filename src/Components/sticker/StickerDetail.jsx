
const StickerDetail = ({sticker}) =>{
    return(
        <>
        
        <div class="product-detail">

            <div class="product-image">
            <img src="https://via.placeholder.com/500x500.png?text=Sticker" alt={sticker.nombre}/>
            </div>

            <div class="product-info">
            <h1 class="product-title">{sticker.nombre}</h1>

            <p class="product-description">
                {sticker.descripcion}
            </p>

            <div class="price-stock">
                <span class="price">${sticker.precio}</span>
                <span class="stock">Stock: {sticker.stock}</span>
            </div>

            <div class="quantity">
                <label for="cantidad">Cantidad:</label>
                <input type="number" id="cantidad" min="1" value="1" />
            </div>

            <button class="btn-add">Agregar al carrito</button>
            </div>
        </div>
        

        </>
    )
}

export default StickerDetail