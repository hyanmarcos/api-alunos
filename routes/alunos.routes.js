const { Router } = require("express");
// importar a conexão com o banco de dados
const sqliteConnection = require("../database");
// criar um novo router
const alunosRouter = Router();

// inserir um novo aluno no banco de dados
alunosRouter.post("/", async (req, res) => {
  // desestruturar o corpo da requisição
  const { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, professor } =
    req.body;
  try {
    // declara a query que será executada no banco de dados
    const query = `INSERT INTO alunos (nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, professor) values (?,?,?,?,?)`;
    // obtem a conexão com o banco de dados
    const db = await sqliteConnection();
    // executa a query no banco de dados
    const result = await db.run(query, [
      nome,
      idade,
      notaPrimeiroSemestre,
      notaSegundoSemestre,
      professor,
    ]);
    // retorna uma resposta de sucesso
    return res.status(200).json({ message: "Usuario inserido com sucesso" });
  } catch (error) {
    // caso der erro, retorna uma resposta de erro
    return res.status(400).json({ error: error.message });
  }
});

alunosRouter.get("/", async (req, res) => {
  // desestruturar o corpo da requisição
  const { nome } = req.body;
  try {
    // declara a query que será executada no banco de dados
    const query = `SELECT idade FROM alunos WHERE nome = ?`;
    // obtem a conexão com o banco de dados
    const db = await sqliteConnection();
    // executa a query no banco de dados
    const result = await db.get(query, [nome]);
    // retorna uma resposta de sucesso
    if (result) {
      return res
        .status(200)
        .json({ message: `O aluno ${nome} tem ${result.idade} anos!` });
    } else {
      // caso nao encontrar o aluno, retorna uma resposta de erro
      return res.status(404).json({ message: `Aluno ${nome} não encontrado.` });
    }
  } catch (error) {
    // caso der erro, retorna uma resposta de erro
    return res.status(400).json({ error: error.message });
  }
});

module.exports = alunosRouter;
