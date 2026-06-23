import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div style={{ padding: "20px" }}>
      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              onClick={() => removeFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;