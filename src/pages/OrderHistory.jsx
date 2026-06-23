import { useEffect, useState } from "react";

function OrderHistory() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={styles.page}>
      <h1>📦 Order History</h1>

      {orders.length === 0 ? (
        <h3>No orders found 🛒</h3>
      ) : (
        orders.map((order, index) => (
          <div key={index} style={styles.card}>
            <h3>Order #{index + 1}</h3>

            <p>Total: ₹{order.total}</p>

            {order.items.map((item) => (
              <div key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.img} />
                <div>
                  <p>{item.name}</p>
                  <p>Qty: {item.qty}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
  },

  card: {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
  },

  item: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    alignItems: "center",
  },

  img: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
  },
};

export default OrderHistory;