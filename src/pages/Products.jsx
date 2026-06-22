import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Phone",
    price: 20000,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    image: "https://via.placeholder.com/200",
  },
];

function Products() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              width: "220px",
            }}
          >
            <img src={product.image} alt={product.name} width="200" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>

            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;