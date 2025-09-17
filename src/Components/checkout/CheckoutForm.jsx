import '../../Styles/checkout.css'

const CheckoutForm = ({ cliente, onChange, onSubmit }) => {
    return (
      <div className="checkout-form">
        <h2>Checkout</h2>
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
  