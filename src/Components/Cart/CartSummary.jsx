import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useNavigate } from "react-router-dom";
import '../../Styles/cart.css'; 

const CartSummary = () => {
  const { totalCompra, clearCart, totalUnidades } = useContext(CartContext);
  const navigate = useNavigate();
  const montoTotal = totalCompra();
  const cantidadTotal = totalUnidades();

  return (
    <div className="cart-summary">
      <h3>Resumen del carrito</h3>
      <p>Productos: {cantidadTotal}</p>
      <p>Total: ${montoTotal}</p>
      <div className="cart-buttons">
        <button onClick={clearCart} className="btn-clear">Vaciar carrito</button>
        <button 
          onClick={() => navigate("/checkout")} 
          disabled={montoTotal === 0}
          className={montoTotal === 0 ? 'btn-disabled' : 'btn-pay'}
        >
          Ir a pagar
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
