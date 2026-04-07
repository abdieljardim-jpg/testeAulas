// Importa a classe principal do Sequelize para abrir a conexao com o banco.
const Sequelize = require("sequelize");

// Cria uma instancia de conexao usando as credenciais salvas no arquivo .env.
// Essa mesma conexao e compartilhada por todos os models do projeto.
const sequelize = new Sequelize(
  process.env.nomeBanco,
  process.env.usuarioBanco,
  process.env.senhaBanco,
  {
    host: "localhost",
    dialect: "mariadb", // Pode ser trocado para mariadb se o banco usado for esse.
  },
);

module.exports = sequelize;