// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const alunosRouter = require('./routes/alunos');

const app = express();
const port = process.env.PORT || 3000;

// Conexão com o MongoDB 
mongoose.connect('mongodb://localhost:3000/minha-api', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

// Rotas da API
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

// ... outras rotas

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use('/alunos', alunosRouter);