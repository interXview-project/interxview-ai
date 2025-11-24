import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar.jsx";
import Home from "./pages/Home.jsx";
import Interview from "./pages/Interview.jsx";
import CVAnalyzer from "./components/features/CvAnalyzer.jsx";
import LoginScreen from "./pages/LoginScreen.jsx";
import SignupScreen from "./pages/SignupScreen.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a1628]">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/cv-analyzer" element={<CVAnalyzer />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
