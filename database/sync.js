// Importa os models para registrar tabelas e relacionamentos.
const usuarios = require("../models/usuarios");

async function syncDatabase() {
    try {
        // Cria as tabelas que ainda nao existem, sem apagar os dados atuais.
        const syncOptions = {};
        // A ordem da sincronizacao respeita as dependencias:
        // primeiro usuario, depois cliente, e por fim pet.
        await usuarios.sync(syncOptions);

        console.log("Tabelas sincronizadas com sucesso");
    } catch (error) {
        console.error("Erro ao sincronizar o banco:", error);
        throw error;
    }
}

module.exports = syncDatabase;