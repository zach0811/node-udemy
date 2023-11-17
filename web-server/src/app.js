const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("Hello Express");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/weather", (req, res) => {
  res.send("Show Weather");
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
