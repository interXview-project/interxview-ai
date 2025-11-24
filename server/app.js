// server/app.js
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { testDBConnection } from "./config/db.js";
import cors from "cors";
import interviewRoutes from "./routes/interviewRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/interview", interviewRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("InterXview API with PostgreSQL is running!");
});
app.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  testDBConnection();
});
