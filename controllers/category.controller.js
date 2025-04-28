const categoryService = require("../services/category.service");

async function getCategory(req, res) {
  const category = await categoryService.getCategory();
  res.status(200).json(category);
}

module.exports = { getCategory };
