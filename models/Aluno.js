// models/Aluno.js
const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  notaPrimeiroSemestre: Number,
  notaSegundoSemestre: Number,
  professor: String,
  sala: Number
});

module.exports = mongoose.model('Aluno', alunoSchema);