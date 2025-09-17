import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { services } from "../../services"; 
import CheckoutForm from "./CheckoutForm";




const CheckoutContainer = () => {
  const { cart, totalCompra, clearCart } = useContext(CartContext);
  const [cliente, setCliente] = useState({ nombre: "", email: "", direccion: "" });
  const [ordenId, setOrdenId] = useState(null);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = await services.orders.create({ cliente, items: cart, total: totalCompra() });
      setOrdenId(id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden: ", error);
    }
  };

  return (
    <>
      {ordenId ? (
        <p className="compraRealizada">Compra realizada! Tu ID de orden es: {ordenId}</p>
      ) : (
        <div className="">
          <CheckoutSummary total={totalCompra} articulos={cart}/>
          <CheckoutForm
          cliente={cliente} 
          onChange={handleChange} 
          onSubmit={handleSubmit} 
        />
        </div>

      )}
    </>
  );
};

export default CheckoutContainer;
