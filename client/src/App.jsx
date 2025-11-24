import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
// import CVAnalyzer from "./pages/CvAnalyzer";
import Login from "./pages/LoginScreen.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";

export default function App() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Interview", path: "/interview" },
    // { name: "CV Analyzer", path: "/cv-analyzer" },
  ];

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected pages */}
          <Route
            path="/interview"
            element={
              <ProtectedRoute>
                {" "}
                <Interview />{" "}
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/cv-analyzer"
            element={
              <ProtectedRoute>
                {" "}
                <CVAnalyzer />{" "}
              </ProtectedRoute>
            }
          /> */}

          {/* Public page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
