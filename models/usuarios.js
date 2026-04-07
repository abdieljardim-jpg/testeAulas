const Sequelize = require("sequelize");
const conexao = require("../database/database");

const Usuarios = conexao.define("usuarios", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Usuarios;