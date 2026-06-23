import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 🛒 Go to Payment Page
  const handlePayment = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    navigate("/payment");
  };

  return (
    <div style={styles.page}>
      <h1>Checkout 🧾</h1>

      {cart.length === 0 ? (
        <h3>Your cart is empty 🛒</h3>
      ) : (
        <div style={styles.container}>
          
          {/* ITEMS */}
          <div style={styles.itemsBox}>
            <h2>Items</h2>

            {cart.map((item) => (
              <div key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.img} />

                <div>
                  <h4>{item.name}</h4>
                  <p>Qty: {item.qty}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div style={styles.summary}>
            <h2>Order Summary</h2>

            <p>Total Items: {cart.length}</p>
            <h3>Total: ₹{totalPrice}</h3>

            <button style={styles.btn} onClick={handlePayment}>
              Proceed to Payment 💳
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
  },

  container: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  itemsBox: {
    flex: 2,
  },

  item: {
    display: "flex",
    gap: "10px",
    border: "1px solid #ddd",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    alignItems: "center",
  },

  img: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
  },

  summary: {
    flex: 1,
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    height: "fit-content",
  },

  btn: {
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Checkout;