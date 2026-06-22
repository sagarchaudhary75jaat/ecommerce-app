import { useCart } from "../context/CartContext";

function Products() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Shoes", price: 1000, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Watch", price: 2000, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Shirt", price: 800, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Headphones", price: 1500, image: "https://via.placeholder.com/150" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <button
              style={styles.button}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Products;