const { getDB } = require("../config/db");

async function findAll() {
  const db = getDB();
  const [category] = await db.execute("SELECT * FROM category");

  return category;
}
module.exports = { findAll };
