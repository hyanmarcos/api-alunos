// routes/alunos.js
const express = require('express');
const router = express.Router();
const Aluno = require('../models/Aluno');

// Rotas para CRUD de alunos
router.get('/', async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
});

// ... outras rotas para criar, atualizar e deletar alunos

module.exports = router;