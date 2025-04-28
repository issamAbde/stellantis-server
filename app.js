const express = require("express");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const categoryRouter = require("./routes/category.routes");
const productsRouter = require("./routes/products.routes");

app.use("/api/category", categoryRouter);
app.use("/api/products", productsRouter);

module.exports = app;
