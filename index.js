// Let's code 🚀
const express = require("express");
const app = express();

app.use(require("morgan")("combined"));
app.get("/", (req, res) => {
  res.json("Hola 👋");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
