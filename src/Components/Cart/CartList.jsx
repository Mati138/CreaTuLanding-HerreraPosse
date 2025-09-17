const CartList = ({ prod, eliminar }) => {
    return (
      <>
        { prod ? (
          <div className="cart-container">
            <div className="cart-item">
              <h3>{prod.nombre}</h3>
              <div className="item-quantity">
                <p>x</p>
                <p>{prod.cantidad}</p>
              </div>
              <div className="item-price">${prod.precio * prod.cantidad}</div>
              <button onClick={() => eliminar(prod.id)} className="remove-btn">
                Eliminar
              </button>
            </div>
          </div>
        ) : (
          <p>Agrega sticker a tu carrito</p>
        )}
      </>
    );
  };
  
  export default CartList;