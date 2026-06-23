import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { cart } = useCart();
  const { user, logout } = useAuth();

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
          to="/checkout"
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            isActive ? "link active-link" : "link"
          }
        >
          Checkout
        </NavLink>

        {/* AUTH SECTION */}
        {user ? (
          <div style={styles.userBox}>
            <span style={{ color: "white" }}>
              {user.email}
            </span>

            <button style={styles.logout} onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <NavLink
            to="/login"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }
          >
            Login
          </NavLink>
        )}

      </div>
    </nav>
  );
}

const styles = {
  userBox: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    color: "white",
  },

  logout: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Navbar;