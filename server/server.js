//.DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const path = require("path");
const cors = require("cors");

//CONFIGURAION./.MIDDLWARE

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CONTROLLERS
const booksController = require("./controllers/book_controller");
app.use("/api/Books", booksController);

//PORT LISTENING
app.listen(4000, () => {
  console.log("Server is listening in port 4000");
});
