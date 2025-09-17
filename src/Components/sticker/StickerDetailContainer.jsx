
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import StickerDetail from "./StickerDetail";
import { services } from "../../services";
import { CartContext } from "../../context/cartContext";

const StickerDetailContainer = () => {
  const { cart, addItem } = useContext(CartContext); // traemos el carrito
  const { idSticker } = useParams();
  const [sticker, setSticker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [agregado, setAgregado] = useState(false);

  // Traemos el producto desde Firestore
  useEffect(() => {
    setLoading(true);
    services.products
      .getById(idSticker)
      .then((data) => setSticker(data))
      .finally(() => setLoading(false));
  }, [idSticker]);

  if (loading) return <p>Cargando Sticker...</p>;
  if (!sticker) return <p>No se encontró el sticker.</p>;

  // Calculamos stock restante considerando lo que ya está en el carrito
  const productoEnCarrito = cart.find((p) => p.id === sticker.id);
  const stockRestante = sticker.stock - (productoEnCarrito ? productoEnCarrito.cantidad : 0);

  const handleAgregar = (cantidad) => {
    if (cantidad > stockRestante) return; // prevención extra
    addItem(sticker, cantidad);
    setAgregado(true);
  };

  return (
    <StickerDetail
      sticker={sticker}
      onAdd={handleAgregar}
      agregado={agregado}
      stockRestante={stockRestante}
    />
  );
};

export default StickerDetailContainer;

