// Let's code 🚀
const express = require("express");
const app = express();

app.use(require("morgan")("combined"));
app.get("/", (req, res) => {
  res.json("Hola 👋");
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
