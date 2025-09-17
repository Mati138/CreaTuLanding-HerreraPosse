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
      // 1. Crear orden en Firestore
      const id = await services.orders.create({
        cliente,
        items: cart,
        total: totalCompra(),
      });
  
      // 2. Actualizar stock de cada producto comprado
      const updates = cart.map(item =>
        services.products.decrementStock(item.id, item.cantidad) // ojo: usa la prop real (cantidad o quantity)
      );
      await Promise.all(updates);
  
      // 3. Limpiar y mostrar id de la orden
      setOrdenId(id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden o actualizar stock: ", error);
    }
  };
  

  return (
    <>
      {ordenId ? (
        <p className="compraRealizada">Compra realizada! Tu ID de orden es: {ordenId}</p>
      ) : (
        <div className="">
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
