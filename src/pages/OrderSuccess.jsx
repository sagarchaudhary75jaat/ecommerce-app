import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1>🎉 Order Placed Successfully!</h1>

        <p>Thank you for shopping with us.</p>

        <p>Your order will be delivered soon 🚚</p>

        <Link to="/" style={styles.btn}>
          Continue Shopping
        </Link>
      </div>
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
    textAlign: "center",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  btn: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 15px",
    background: "black",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default OrderSuccess;