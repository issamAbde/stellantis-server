const mysql = require("mysql2/promise");

let pool;

async function connectDB() {
  pool = await mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });
}

function getDB() {
  if (!pool) throw new Error("Database not connected");
  return pool;
}

module.exports = { connectDB, getDB };
