import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/LoginScreen.jsx";
import SignUp from "./pages/SignupScreen.jsx";
import Interview from "./pages/Interview.jsx";
import Profile from "./pages/Profile.jsx";
import Dashboard from "./pages/Dashboard";
import CvBoost from "./pages/CvBoost";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";

export default function App() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Interview", path: "/interview", protected: true },
    { name: "Dashboard", path: "/dashboard", protected: true },
    { name: "Profile", path: "/profile", protected: true },
    { name: "CV Boost", path: "/cv-boost", protected: true },
  ];

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar routes={routes} />
        <ScrollToTop />

        <main className="pt-20 min-h-screen bg-[#0a1628]">
          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* PROTECTED ROUTES */}
            <Route
              path="/interview"
              element={
                <ProtectedRoute>
                  <Interview />
                </ProtectedRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cv-boost"
              element={
                <ProtectedRoute>
                  <CvBoost />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
