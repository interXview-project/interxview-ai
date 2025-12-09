import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home.jsx";
// import CVAnalyzer from "./pages/CvAnalyzer.jsx";
import Login from "./pages/LoginScreen.jsx";
import SignUp from "./pages/SignupScreen.jsx";
import Interview from "./pages/Interview.jsx";
// import MockTest from "./pages/MockTest.jsx";
import Profile from "./pages/Profile.jsx";

import Dashboard from "./pages/Dashboard";

import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";

export default function App() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "Interview", path: "/interview" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },

    // { name: "CV Analyzer", path: "/cv-analyzer" },
  ];

  return (
    <AuthProvider>
      {" "}
      <BrowserRouter>
        {" "}
        <Navbar routes={routes} />
        <main className="pt-20 min-h-screen bg-[#0a1628]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/dashboard" element={<Dashboard />} />

            {/* <Route path="/mock-test" element={<MockTest />} /> */}
            {/* <Route path="/cv-analyzer" element={<CVAnalyzer />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
}
