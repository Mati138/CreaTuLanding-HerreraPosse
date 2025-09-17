import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        setCart(prevCart => {
          // Si el producto ya está en el carrito, actualizamos cantidad
          const existingItem = prevCart.find(prod => prod.id === item.id);
          if (existingItem) {
            return prevCart.map(prod =>
              prod.id === item.id
                ? { ...prod, cantidad: prod.cantidad + cantidad }
                : prod
            );
          } else {
            return [...prevCart, { ...item, cantidad }];
          }
        });
    };
    // Función para remover un producto
    const removeItem = (id) => {
        setCart(prevCart =>
          prevCart
            .map(prod => 
              prod.id === id ? { ...prod, cantidad: prod.cantidad - 1 } : prod
            )
            .filter(prod => prod.cantidad > 0)
        );
      };

    // Función para vaciar el carrito
    const clearCart = () => setCart([]);

    // Total de unidades en el carrito
    const totalUnidades = () => cart.reduce((acc, prod) => acc + prod.cantidad, 0);

    // Total de la compra
    const totalCompra = () => cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);


    


    return(
        <CartContext.Provider 
        value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            totalUnidades,
            totalCompra
        }}>
            {children}
        </CartContext.Provider>
    )

}

