import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="nav">
      {/* Logo */}
      <h2 className="logo">E-Commerce</h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Links */}
      <div className={`links ${open ? "active" : ""}`}>
        <NavLink onClick={() => setOpen(false)} to="/" className="link">
          Home
        </NavLink>

        <NavLink onClick={() => setOpen(false)} to="/products" className="link">
          Products
        </NavLink>

        <NavLink onClick={() => setOpen(false)} to="/cart" className="link">
          Cart ({totalItems})
        </NavLink>

        <NavLink onClick={() => setOpen(false)} to="/wishlist" className="link">
          Wishlist
        </NavLink>

        <NavLink onClick={() => setOpen(false)} to="/login" className="link">
          Login
        </NavLink>

        <NavLink onClick={() => setOpen(false)} to="/checkout" className="link">
          Checkout
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;