import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div style={styles.notFound}>
        <h2>Product Not Found</h2>

        <Link to="/products" style={styles.backBtn}>
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.imageBox}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />
      </div>

      <div style={styles.details}>
        <span style={styles.category}>
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <h2 style={styles.price}>
          ₹{product.price}
        </h2>

        <p style={styles.desc}>
          {product.desc}
        </p>

        <button
          onClick={() => addToCart(product)}
          style={styles.btn}
        >
          Add to Cart 🛒
        </button>

        <Link
          to="/products"
          style={styles.backLink}
        >
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "30px",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },

  imageBox: {
    flex: 1,
    minWidth: "300px",
  },

  image: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
  },

  details: {
    flex: 1,
    minWidth: "300px",
  },

  category: {
    background: "#e8f5e9",
    color: "#00c853",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  },

  price: {
    color: "#00c853",
    marginTop: "10px",
  },

  desc: {
    color: "#555",
    lineHeight: "1.6",
  },

  btn: {
    padding: "12px 20px",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "15px",
    fontSize: "16px",
  },

  backLink: {
    display: "inline-block",
    marginTop: "20px",
    textDecoration: "none",
    color: "#00c853",
    fontWeight: "bold",
  },

  notFound: {
    textAlign: "center",
    padding: "50px",
  },

  backBtn: {
    textDecoration: "none",
    color: "#00c853",
    fontWeight: "bold",
  },
};

export default ProductDetails;