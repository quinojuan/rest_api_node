const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hola mundo!");
  console.log("Hola mundo");
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
