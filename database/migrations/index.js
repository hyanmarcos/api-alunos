const sqliteConnection = require('../');
const createAlunos = require('./createAlunos');

// Função que executa as migrações
async function migrationsRun() {
  const schemas = [
    createAlunos,
  ].join('');
  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}

module.exports = migrationsRun;