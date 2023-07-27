const app = require("./src/app/app");
const modelForm = require("./src/models/form");
const connection = require("./src/services/conectionSQL");

const port = process.env.PORT || 8080;

modelForm.sync();

const server = app.listen(port, () => {
  console.log("Server is running correcly", server.address().port);
});

const connectionSQL = async () => {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connectionSQL();
