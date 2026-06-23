import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import products from "../data/products";

function Products() {
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div style={styles.loading}>
        <h2>🛍 Loading Products...</h2>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <h1>🛍 Products</h1>

      <div style={styles.filterBox}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.search}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.select}
        >
          <option value="All">All Categories</option>
          <option value="Shoes">Shoes</option>
          <option value="Watch">Watch</option>
          <option value="Shirt">Shirt</option>
          <option value="Headphones">Headphones</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      <p>
        <strong>{filteredProducts.length}</strong> Products Found
      </p>

      <div style={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h3>{product.name}</h3>

            <p>{product.category}</p>

            <h4>₹{product.price}</h4>

            <div style={styles.btnGroup}>
              <button
                style={styles.btn}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <Link
                to={`/product/${product.id}`}
                style={styles.viewBtn}
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
  },

  loading: {
    textAlign: "center",
    marginTop: "100px",
  },

  filterBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  search: {
    padding: "10px",
    flex: "1",
    minWidth: "250px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  select: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "20px",
  },

  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    background: "#fff",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  btnGroup: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "10px",
  },

  btn: {
    padding: "8px 12px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },

  viewBtn: {
    padding: "8px 12px",
    background: "green",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default Products;