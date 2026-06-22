import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>

      <button>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;