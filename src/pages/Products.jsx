import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

function Products() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  // 🌐 Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      });
  }, []);

  // 🌐 Fetch categories
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // 🔍 Filter logic (search + category)
  useEffect(() => {
    let result = products;

    if (selectedCategory !== "all") {
      result = result.filter(
        (p) => p.category === selectedCategory
      );
    }

    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(result);
  }, [search, selectedCategory, products]);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading products...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* 🏷 CATEGORY FILTER */}
      <div style={styles.catBox}>
        <button
          style={styles.catBtn}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        {categories.map((cat, index) => (
          <button
            key={index}
            style={styles.catBtn}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <div style={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <div key={product.id} style={styles.card}>
              <img
                src={product.image}
                alt={product.title}
                style={styles.image}
              />

              <h3>{product.title.slice(0, 40)}</h3>

              <p>₹{Math.round(product.price * 80)}</p>

              <div style={styles.btnGroup}>
                <button
                  style={styles.button}
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.title,
                      price: Math.round(product.price * 80),
                      image: product.image,
                    })
                  }
                >
                  Add to Cart
                </button>

                <button
                  style={styles.button}
                  onClick={() =>
                    addToWishlist({
                      id: product.id,
                      name: product.title,
                      price: Math.round(product.price * 80),
                      image: product.image,
                    })
                  }
                >
                  ❤️ Wishlist
                </button>

                <Link
                  to={`/product/${product.id}`}
                  style={{
                    ...styles.button,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h3>No products found 😢</h3>
        )}
      </div>
    </div>
  );
}

const styles = {
  search: {
    padding: "10px",
    width: "100%",
    maxWidth: "300px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  catBox: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  catBtn: {
    padding: "6px 10px",
    border: "1px solid black",
    background: "white",
    cursor: "pointer",
    borderRadius: "5px",
  },

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
    objectFit: "contain",
  },

  btnGroup: {
    display: "flex",
    gap: "8px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  button: {
    marginTop: "10px",
    padding: "8px 12px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Products;