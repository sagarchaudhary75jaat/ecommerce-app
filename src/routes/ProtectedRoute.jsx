import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    alert("Please login first 🔐");
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;