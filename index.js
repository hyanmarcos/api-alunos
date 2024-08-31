const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");
const app = express();

// importar o arquivo que roda as migrations
const migrationsRun = require("./database/migrations/index.js");

// rodar o banco
migrationsRun();

// cors e body parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// rotas da nossa aplicacao
app.use("/", routes);

// porta que vai rodar a api
const port = 3000;

// app vai escutar essa porta e requesicoes
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
