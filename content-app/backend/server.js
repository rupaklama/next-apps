const express = require("express");
const path = require("path");
const fs = require("fs");
var cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(express.json());

const pathToFile = path.resolve("./data.json");

app.use(cors(corsOptions));

const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

app.get("/", (req, res) => {
  res.status(200).send("Hello from backend server!");
});

app.get("/api/resources", (req, res) => {
  const resources = getResources();
  res.status(200).send(resources);
});

app.post("/api/resources", (req, res) => {
  const resources = getResources();

  const resource = req.body;
  if (!resource.title || !resource.description || !resource.link) {
    return res.status(400).send("fields values are missing");
  }

  resource.id = Date.now().toString();
  resource.createdAt = new Date();
  resource.status = "inactive";

  resources.push(resource);

  fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), error => {
    if (error) {
      return res.status(400).send("Cannot store data in the file");
    }
  });

  res.status(201).send("new resource created!");
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
