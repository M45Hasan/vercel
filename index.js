const express = require("express");
const app = express();

app.get("/", (req, res) => {
  let data = [
    {
      name: "Hasan",
      age: 34,
    },
    {
      name: "Dulhan",
      age: 28,
    },
  ];

  res.send(data)
});

app.listen(2000, () => {
  console.log("Port Running");
});
