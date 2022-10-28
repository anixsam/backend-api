const mongoose = require("mongoose");

require("dotenv").config();
const dbURI = process.env.DATABASE_URL;

mongoose.connect(dbURI);
const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("connected", () => {
  console.log("Connected to MongoDB");
});

const express = require("express");
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())

const route = require("./server/routes/apiRoutes");

app.use("/api", route);
app.use(express.json());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
