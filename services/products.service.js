const productsRepository = require("../repository/products.repository");

async function getProducts(query) {
  return await productsRepository.findAll(query);
}

module.exports = { getProducts };
