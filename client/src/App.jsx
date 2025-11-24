import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import CVAnalyzer from "./pages/CvAnalyzer.jsx";
import Login from "./pages/LoginScreen.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";
import MockTest from "./pages/MockTest.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mock-test" element={<MockTest />} />

          <Route path="/cv-analyzer" element={<CVAnalyzer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
