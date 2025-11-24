import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      login(res.data.token);

      navigate(redirectPath, { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed.");
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl mb-6">Login</h1>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}

// import { useAuth } from "../context/AuthContext";
// import { useNavigate, useLocation } from "react-router-dom";

// export default function Login() {

//   const { login } = useAuth();
//   login("dummy-token");
//   const navigate = useNavigate();
//   const location = useLocation();
//     // TODO: Replace this with real backend login API
//     // For now, set a dummy token
//     const dummyToken = "1234567890";
//     login(dummyToken);

//     navigate(redirectPath, { replace: true });
//   // redirect user back to where they came from, or home by default
//   const redirectPath = location.state?.from?.pathname || "/";
//   return <h1 className="text-3xl p-10">Login Page</h1>;
// }
