const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const config = require("./server/config/keys");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/dialogflow", require("./server/routes/dialogflow"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
