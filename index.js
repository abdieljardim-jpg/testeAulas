const express = require('express')
const app = express()
const port = 3000

// Permite receber JSON no corpo das requisicoes.
app.use(express.json());
// Permite ler dados vindos de formularios HTML.
app.use(express.urlencoded({ extended: true }));
// Expoe a pasta public para servir CSS, JS e imagens estaticas.
app.use(express.static("public"));
// Define o EJS como motor de templates das views.
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render("home")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))