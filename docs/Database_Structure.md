# Database Structure Documentation

## Database: `interxview`

### 1. `users`
| Column | Type | Description |
|--------|------|-------------|
| `user_id` | SERIAL | Primary Key |
| `username` | VARCHAR(100) | Full name |
| `email` | VARCHAR(100) | Unique email |
| `password` | VARCHAR(255) | Encrypted password |
| `role` | VARCHAR(20) | user / admin |
| `created_at` | TIMESTAMP | Registration date |

---

### 2. `interviews`
| Column | Type | Description |
|--------|------|-------------|
| `interview_id` | SERIAL | Primary Key |
| `user_id` | INT | FK → `users.user_id` |
| `question` | TEXT | Interview question |
| `answer` | TEXT | User's answer |
| `ai_feedback` | TEXT | AI evaluation |
| `score` | INT | Interview performance score |
| `created_at` | TIMESTAMP | Date of interview |

---

### 3. `cv_uploads`
| Column | Type | Description |
|--------|------|-------------|
| `cv_id` | SERIAL | Primary Key |
| `user_id` | INT | FK → `users.user_id` |
| `file_url` | TEXT | Uploaded CV file |
| `ai_analysis` | TEXT | AI feedback |
| `uploaded_at` | TIMESTAMP | Upload time |

---

### 4. `feedback` (optional)
| Column | Type | Description |
|--------|------|-------------|
| `feedback_id` | SERIAL | Primary Key |
| `user_id` | INT | FK → `users.user_id` |
| `message` | TEXT | Feedback message |
| `rating` | INT | 1–5 star rating |
| `created_at` | TIMESTAMP | Feedback time |

---

### Example: `server/db.js`
```javascript
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
    console.log("Database connection successful! ", res.rows[0].now);
  } catch (error) {
    console.log("Connection with database failed");
  }
}

export default pool;
