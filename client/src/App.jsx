import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
import CVAnalyzer from "./pages/CvAnalyzer.jsx";
import Login from "./pages/LoginScreen.jsx";

// استدعاء صفحة الموك
import MockTest from "./pages/MockTest.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock-test" element={<MockTest />} />  {/* Route جديد للموك */}
        <Route path="/cv-analyzer" element={<CVAnalyzer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
