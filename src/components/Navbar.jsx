import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="nav">
      <h2 className="logo">E-Commerce</h2>

      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      <div className={`links ${open ? "menu-open" : ""}`}>
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
        >
          Cart ({totalItems})
        </NavLink>

        <NavLink
          to="/wishlist"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
        >
          Wishlist
        </NavLink>

        <NavLink
          to="/login"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/checkout"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
        >
          Checkout
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;