import { useContext } from "react"
import { CartContext } from "../../context/cartContext"
import CartList from "./CartList"
import CartSummary from "./CartSummary"
const CartContainer = () =>{
    const {cart, removeItem} = useContext(CartContext)
    const handleEliminar = (id) => {
        removeItem(id); // eliminamos del carrito
      };

    return(
        <>
            <section>
                {cart.length === 0 ? 
                    (
                        <p>Agrega sticker a tu carrito</p>
                    ) : 
                    (
                    cart.map((prod) => (
                        <CartList
                            key={prod.id}
                            prod={prod}
                            eliminar={handleEliminar}
                        />
                    ))
                    )
                }
                <CartSummary />
            </section>
        </>
    )
}

export default CartContainer