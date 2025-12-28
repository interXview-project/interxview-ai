import dotenv from 'dotenv';
dotenv.config();
import pool from '../config/db.js';

const email = process.argv[2];
if (!email) {
    console.log('Usage: node scripts/checkUser.js <email>');
    process.exit(1);
}

(async () => {
    try {
        const res = await pool.query('SELECT user_id, username, email, created_at FROM users WHERE email = $1', [email]);
        if (res.rows.length === 0) {
            console.log('No user found for', email);
        } else {
            console.log('User found:', res.rows[0]);
        }
    } catch (err) {
        console.error('Error querying DB:', err.message || err);
    } finally {
        process.exit(0);
    }
})();