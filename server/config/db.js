// server/db.js
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});
export async function testDBConnection() {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("database connection successfuly ! ", res.rows[0].now);
  } catch (error) {
    console.log("connection with database failed ");
  }
}
export default pool;
