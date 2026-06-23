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

  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  // PAYMENT HANDLER
  const handlePay = (e) => {
    e.preventDefault();

    // Basic validation
    if (!card.name || !card.number || !card.expiry || !card.cvv) {
      alert("⚠️ Please fill all details");
      return;
    }

    if (card.number.length < 12) {
      alert("⚠️ Invalid card number");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Get cart
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      if (cart.length === 0) {
        alert("Cart is empty!");
        setLoading(false);
        return;
      }

      // Total
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      );

      // Orders
      const orders = JSON.parse(localStorage.getItem("orders")) || [];

      const newOrder = {
        id: Date.now(),
        items: cart,
        total,
        date: new Date().toLocaleString(),
      };

      orders.push(newOrder);

      localStorage.setItem("orders", JSON.stringify(orders));
      localStorage.removeItem("cart");

      setLoading(false);

      alert("🎉 Payment Successful!");

      navigate("/order-success");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <form style={styles.box} onSubmit={handlePay}>
        <h1>💳 Payment</h1>

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
          placeholder="Expiry (MM/YY)"
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

        <button
          type="submit"
          style={styles.btn}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },

  box: {
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    background: "#fff",
  },

  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    outline: "none",
  },

  btn: {
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px",
    transition: "0.3s",
  },
};

export default Payment;