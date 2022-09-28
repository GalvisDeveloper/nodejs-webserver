require('dotenv').config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático mediante middleware
app.use(express.static("public"));

app.get(["/", "/home"], (req, res) => {
  res.status(200);
  res.render('home', {
    name: 'Cristian Bustos',
    title: 'Node Course',
  })
});

app.get("/generic", (req, res) => {
  res.status(200);
  res.render('generic', {
    name: 'Cristian Bustos',
    title: 'Node Course',
  })
});

app.get("/elements", (req, res) => {
  res.status(200);
  res.render('elements', {
    name: 'Cristian Bustos',
    title: 'Node Course',
  })
});

// app.get("/generic", (req, res) => {
//   res.status(200);
//   res.sendFile(__dirname + "/public/back/template/generic.html")
// });

// app.get("/elements", (req, res) => {
//   res.status(200);
//   res.sendFile(__dirname + "/public/back/template/elements.html")
// });

// app.get("/home", (req, res) => {
//   res.status(200);
//   res.sendFile(__dirname + "/public/back/template/index.html")
// });

app.get("*", (req, res) => {
  res.status(404);
  res.sendFile(__dirname + "/public/back/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
