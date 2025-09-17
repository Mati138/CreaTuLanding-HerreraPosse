import { useState } from "react";
import Counter from "../../Components/counter/Counter.jsx";

const StickerDetail = ({ sticker, onAdd, agregado, stockRestante }) => {
  const [cantidad, setCantidad] = useState(1); // cantidad elegida

  return (
    <div className="product-detail">
      <div className="product-image">
        <img
          src="https://via.placeholder.com/500x500.png?text=Sticker"
          alt={sticker.nombre}
        />
      </div>

      <div className="product-info">
        <h1 className="product-title">{sticker.nombre}</h1>
        <p className="product-description">{sticker.descripcion}</p>

        <div className="price-stock">
          <span className="price">${sticker.precio}</span>
          <span className="stock">Stock disponible: {stockRestante}</span>
        </div>

        <div className="quantity">
          <label htmlFor="cantidad">Cantidad:</label>
          {stockRestante === 0 ? (
            <p>Producto sin stock</p>
          ) : (
            <Counter
              stock={stockRestante}
              value={cantidad}
              onChange={setCantidad}
            />
          )}
        </div>

        <button
          className="btn-add"
          onClick={() => onAdd(cantidad)}
          disabled={stockRestante === 0}
        >
          Agregar al carrito
        </button>

        {agregado && <p>Producto agregado al carrito</p>}
      </div>
    </div>
  );
};

export default StickerDetail;

