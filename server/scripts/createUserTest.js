import api from "../utils/axiosInstance";

const payload = {
  username: "Test User",
  email: "testuser+copilot@example.com",
  password: "password123",
};

(async () => {
  try {
    const res = await fetch("/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    console.log("Response:", res.status, data);
  } catch (err) {
    console.error("Request error:", err.message || err);
  }
})();
