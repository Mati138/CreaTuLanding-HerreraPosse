import '../../Styles/checkout.css'

const CheckoutForm = ({ cliente, total, onChange, onSubmit }) => {
  console.log(total)
    return (
      <div className="checkout-form">
        <h2>Checkout</h2>
        <h4>Total a pagar: ${total}</h4>
        <form onSubmit={onSubmit}>
          <input
            name="nombre"
            placeholder="Nombre"
            value={cliente.nombre}
            onChange={onChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            value={cliente.email}
            onChange={onChange}
            required
          />
          <input
            name="direccion"
            placeholder="Dirección"
            value={cliente.direccion}
            onChange={onChange}
            required
          />
          <button type="submit">Confirmar compra</button>
        </form>
      </div>
    );
  };
  
  export default CheckoutForm;
  