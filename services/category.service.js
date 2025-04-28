const categoryRepository = require("../repository/category.repository");

async function getCategory() {
  return await categoryRepository.findAll();
}

module.exports = { getCategory };
