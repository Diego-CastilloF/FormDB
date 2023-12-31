require("dotenv").config();
const { Sequelize } = require("sequelize");
const credentials = require("../config/const");

const connection = new Sequelize(
  credentials.dbName,
  credentials.dbUser,
  credentials.dbPass,
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = connection;
