import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export async function testDBConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("Database connected successfully:", res.rows[0].now);
  } catch (error) {
    console.error("Database connection failed ", error);
  }
}

export default pool;
