import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import { testDBConnection } from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running successfully ");
});
app.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});
// Start server
const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  testDBConnection();
});
