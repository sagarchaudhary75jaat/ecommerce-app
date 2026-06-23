import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.page}>
      
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.title}>Shop Smart, Live Better 🛍️</h1>

        <p style={styles.subtitle}>
          Discover top products at unbeatable prices. Fashion, electronics, and more.
        </p>

        <div style={styles.btnGroup}>
          <Link to="/products" style={styles.primaryBtn}>
            Start Shopping
          </Link>

          <Link to="/wishlist" style={styles.secondaryBtn}>
            View Wishlist ❤️
          </Link>
        </div>
      </div>

      {/* CATEGORIES */}
      <h2 style={styles.sectionTitle}>Shop by Category</h2>

      <div style={styles.grid}>
        <div style={styles.card}>👕 Fashion</div>
        <div style={styles.card}>💻 Electronics</div>
        <div style={styles.card}>💍 Jewelry</div>
        <div style={styles.card}>🛋️ Home Decor</div>
      </div>

      {/* FEATURE SECTION */}
      <div style={styles.feature}>
        <h2>🔥 Big Discounts Every Day</h2>
        <p>Get amazing deals on top brands with fast delivery.</p>
      </div>

    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
  },

  hero: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(to right, #111, #333)",
    color: "white",
    borderRadius: "10px",
    padding: "20px",
  },

  title: {
    fontSize: "42px",
    marginBottom: "15px",
  },

  subtitle: {
    fontSize: "18px",
    maxWidth: "600px",
    opacity: 0.8,
    marginBottom: "25px",
  },

  btnGroup: {
    display: "flex",
    gap: "15px",
  },

  primaryBtn: {
    padding: "12px 18px",
    background: "#00ff88",
    color: "black",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },

  secondaryBtn: {
    padding: "12px 18px",
    background: "transparent",
    color: "white",
    border: "1px solid white",
    textDecoration: "none",
    borderRadius: "5px",
  },

  sectionTitle: {
    marginTop: "40px",
    textAlign: "center",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },

  card: {
    padding: "20px",
    textAlign: "center",
    background: "#f4f4f4",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  feature: {
    marginTop: "40px",
    padding: "20px",
    background: "#111",
    color: "white",
    textAlign: "center",
    borderRadius: "10px",
  },
};

export default Home;