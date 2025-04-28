const { getDB } = require("../config/db");

async function findAll(query) {
  const db = getDB();
  let page = parseInt(query.page) || 1;
  let limit = parseInt(query.limit) || 10;

  const offset = (page - 1) * limit;
  const [products] = await db.query(
    "SELECT * FROM product where category_id = ?  LIMIT ? OFFSET ?  ",
    [query.category_id, limit, offset]
  );

  const [totalProducts] = await db.query(
    "SELECT COUNT(*) AS total FROM product WHERE category_id = ?",
    [query.category_id]
  );
  const totalPages = Math.ceil(totalProducts[0].total / limit);
  return [products, totalPages];
}
module.exports = { findAll };
