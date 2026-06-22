import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">E-Commerce</h2>

      <div className="links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/products" className="link">Products</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
        <NavLink to="/wishlist" className="link">Wishlist</NavLink>
        <NavLink to="/login" className="link">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;