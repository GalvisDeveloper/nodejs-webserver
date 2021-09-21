const express = require("express");
const app = express();
const port = 8080;

// Servir contenido estático mediante middleware
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
