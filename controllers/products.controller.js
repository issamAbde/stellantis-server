const productsService = require("../services/products.service");

async function getProducts(req, res) {
  const [products, totalPages] = await productsService.getProducts(req.query);
  res.status(200).json({ products: products, totalPages: totalPages });
}

module.exports = { getProducts };
