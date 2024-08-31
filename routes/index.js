const { Router } = require("express");
const alunosRouter = require("./alunos.routes");

const routes = Router();

// Rota para alunos
routes.use("/alunos", alunosRouter);

module.exports = routes;
