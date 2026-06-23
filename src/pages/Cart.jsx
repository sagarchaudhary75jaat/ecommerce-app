import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🛒 Shopping Cart</h1>

      {cart.length === 0 ? (
        <div style={styles.empty}>
          <h2>Your cart is empty</h2>
          <p>Add some amazing products!</p>

          <Link to="/products" style={styles.shopBtn}>
            🛍 Go Shopping
          </Link>
        </div>
      ) : (
        <div style={styles.container}>
          
          {/* LEFT - CART ITEMS */}
          <div style={styles.left}>
            {cart.map((item) => (
              <div key={item.id} style={styles.card}>
                
                <img
                  src={item.image}
                  alt={item.name}
                  style={styles.image}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/120")
                  }
                />

                <div style={styles.info}>
                  <h3>{item.name}</h3>
                  <p style={styles.category}>
                    {item.category}
                  </p>

                  <h4>₹{item.price}</h4>

                  {/* QTY CONTROLS */}
                  <div style={styles.qtyBox}>
                    <button
                      onClick={() => decreaseQty(item.id)}
                      style={styles.qtyBtn}
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      style={styles.qtyBtn}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={styles.removeBtn}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT - SUMMARY */}
          <div style={styles.right}>
            <h2>Order Summary</h2>

            <hr />

            <p>Items: {cart.length}</p>
            <h3>Total: ₹{totalPrice}</h3>

            <Link to="/checkout" style={styles.checkoutBtn}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    padding: "20px",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },

  left: {
    flex: 2,
    minWidth: "300px",
  },

  right: {
    flex: 1,
    minWidth: "250px",
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    height: "fit-content",
    background: "#f9f9f9",
  },

  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #eee",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    background: "#fff",
    gap: "10px",
    flexWrap: "wrap",
  },

  image: {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  info: {
    flex: 1,
    minWidth: "150px",
  },

  category: {
    fontSize: "12px",
    color: "#888",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "5px",
  },

  qtyBtn: {
    padding: "5px 10px",
    border: "none",
    background: "black",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },

  removeBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  checkoutBtn: {
    display: "block",
    marginTop: "15px",
    padding: "10px",
    background: "black",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    borderRadius: "6px",
  },

  empty: {
    textAlign: "center",
    marginTop: "80px",
  },

  shopBtn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 15px",
    background: "green",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
  },
};

export default Cart;