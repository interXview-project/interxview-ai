// ================= ProtectedRoute Component =================
// Protects routes from unauthenticated access
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  // ===== Get Auth Context =====
  const { user } = useAuth();       // User object from context
  const location = useLocation();    // Current location for redirect

  // ===== Redirect if not authenticated =====
  if (!user?.token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ===== Render children if authenticated =====
  return children;
}
