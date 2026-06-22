import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="nav">
      <h2 className="logo">E-Commerce</h2>

      <div className="links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/products" className="link">Products</NavLink>

        <NavLink to="/cart" className="link">
          Cart ({totalItems})
        </NavLink>

        <NavLink to="/wishlist" className="link">Wishlist</NavLink>
        <NavLink to="/login" className="link">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;