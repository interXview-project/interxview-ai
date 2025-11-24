import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();  // FIXED
  const location = useLocation();

  if (!user?.token) {          // FIXED
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
