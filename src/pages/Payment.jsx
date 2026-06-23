import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  // ✅ FIX: handle input changes
  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handlePay = (e) => {
    e.preventDefault();

    if (!card.name || !card.number || !card.expiry || !card.cvv) {
      alert("Please fill all details");
      return;
    }

    // Get cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    // Calculate total
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    // Get existing orders
    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Add new order
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: total,
      date: new Date().toLocaleString(),
    };

    orders.push(newOrder);

    // Save to localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Clear cart after order
    localStorage.removeItem("cart");

    alert("Payment Successful 🎉");

    navigate("/order-success");
  };

  return (
    <div style={styles.container}>
      <form style={styles.box} onSubmit={handlePay}>
        <h1>Payment 💳</h1>

        <input
          name="name"
          placeholder="Card Holder Name"
          value={card.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="number"
          placeholder="Card Number"
          value={card.number}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="expiry"
          placeholder="Expiry Date (MM/YY)"
          value={card.expiry}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          name="cvv"
          placeholder="CVV"
          value={card.cvv}
          onChange={handleChange}
          style={styles.input}
        />

        <button type="submit" style={styles.btn}>
          Pay Now
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },

  btn: {
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Payment;