// Criação da tabela alunos
const createAlunos = `
    CREATE TABLE IF NOT EXISTS
        alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome VARCHAR,
            idade INTEGER,
            notaPrimeiroSemestre INTEGER,
            notaSegundoSemestre INTEGER,
            professor VARCHAR,
            sala INTEGER
    );
`;

module.exports = createAlunos;