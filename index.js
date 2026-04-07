require("dotenv").config();
const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const bcrypt = require("bcrypt");

const Usuario = require("./models/usuarios");

app.get("/", async (req, res) => {
  const usuarios = await Usuario.findAll(); // vem do banco
  res.json(usuarios); // manda pro front
});

app.post('/addname', function (req, res) {
  let nome = req.body.name;
  Usuario.create({
    nome: nome
  }).then(() => {
    res.redirect("/");
  });
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))