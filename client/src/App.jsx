import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
// import CVAnalyzer from "./pages/CvAnalyzer.jsx";
import Login from "./pages/LoginScreen.jsx";
import SignUp from "./pages/SignupScreen.jsx";
import Interview from "./pages/Interview.jsx";

import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";
import MockTest from "./pages/MockTest.jsx";

export default function App() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Interview", path: "/interview" }, // ← أضفناه

    { name: "Mock Test", path: "/mock-test" },
    // { name: "CV Analyzer", path: "/cv-analyzer" },
  ];

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar routes={routes} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Interview />} />

          <Route path="/mock-test" element={<MockTest />} />
          {/* <Route path="/cv-analyzer" element={<CVAnalyzer />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
