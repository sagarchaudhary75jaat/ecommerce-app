import { useCart } from "../context/CartContext";

function Products() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Watch", price: 2000 },
    { id: 3, name: "Shirt", price: 800 },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>

          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;