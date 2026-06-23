import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Shoes",
      price: 1000,
      image: "https://via.placeholder.com/300",
      description: "Comfortable running shoes.",
    },
    {
      id: 2,
      name: "Watch",
      price: 2000,
      image: "https://via.placeholder.com/300",
      description: "Premium wrist watch.",
    },
    {
      id: 3,
      name: "Shirt",
      price: 800,
      image: "https://via.placeholder.com/300",
      description: "Cotton casual shirt.",
    },
    {
      id: 4,
      name: "Headphones",
      price: 1500,
      image: "https://via.placeholder.com/300",
      description: "Noise-cancelling headphones.",
    },
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
      />

      <h1>{product.name}</h1>

      <h2>₹{product.price}</h2>

      <p>{product.description}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;