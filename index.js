const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello Node");
});

app.listen(2000, () => {
  console.log("Port Running");
});
