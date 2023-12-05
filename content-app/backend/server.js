const express = require("express");
const path = require("path");
const fs = require("fs");
var cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();

const pathToFile = path.resolve("./data.json");

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).send("Hello from backend server!");
});

app.get("/api/resources", (req, res) => {
  const stringifiedData = fs.readFileSync(pathToFile);
  res.status(200).send(JSON.parse(stringifiedData));
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
