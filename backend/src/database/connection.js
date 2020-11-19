// faz a conexao do banco de dados
const knex = require ('knex');
const configuration = require ("../../knexfile");

// passa a conexao de desenvolvimento advinda do knex
const connection = knex(configuration.development);

module.exports = connection;