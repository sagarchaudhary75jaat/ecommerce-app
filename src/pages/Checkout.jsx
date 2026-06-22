import { useCart } from "../context/CartContext";
import { useState } from "react";

function Checkout() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }

    alert("Order placed successfully 🎉");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Checkout</h1>

      {/* ORDER SUMMARY */}
      <h2>Order Summary</h2>
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price} × {item.qty}
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>

      <hr />

      {/* ADDRESS FORM */}
      <h2>Shipping Details</h2>

      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="address"
        placeholder="Address"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;