const app = require("./app");
const { connectDB } = require("./config/db");
require("dotenv").config();

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
