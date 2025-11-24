import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
import CVAnalyzer from "./pages/CvAnalyzer";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx";
import './index.css';
=======
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import Interview from "./pages/Interview.jsx";
import CVAnalyzer from "./pages/CvAnalyzer.jsx";
import Login from "./pages/LoginScreen.jsx";
>>>>>>> 7580a3c2d9b766dca7c47449ddf5ae602ef908b3

export default function App() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Interview", path: "/interview" },
    { name: "CV Analyzer", path: "/cv-analyzer" },
  ];

  return (
<<<<<<< HEAD
    <AuthProvider>
      <BrowserRouter>
        <Navbar routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected pages */}
          <Route path="/interview" element={<ProtectedRoute> <Interview /> </ProtectedRoute>} />
          <Route path="/cv-analyzer" element={<ProtectedRoute> <CVAnalyzer /> </ProtectedRoute>} />

          {/* Public page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
=======
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/cv-analyzer" element={<CVAnalyzer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 7580a3c2d9b766dca7c47449ddf5ae602ef908b3
  );
}
