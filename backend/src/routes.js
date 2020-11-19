const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/ongController')
const IncidentController = require('./controllers/incidentController')

// Rotas da aplicacao 
// Recurso: algo que queremos buscar na aplicacao

// GET: Busca informacoes no BackEnd 
// POST: Cria informacoes no BackEnd
// PUT: Altera informacoes no BackEnd
// DELETE: Apaga informacoes no BackEnd

// Tipos de parametros que sao passado pela Query

// Query Params: parametros nomeados enviados na rota apos o simbolo ?
// servem para filtros, paginacao, entre outros
// para acessa-los utilizamos request.query

// Route Params: parametros utilizados para identificar/buscar recursos
// para acessa-los utilizamos request.params

// Request Body: corpo da requisicao utilizado para criar ou alterar recursos

// SQL: MySQL, PostgresSQL, Oracle ...
// NoSQL: MongoDB, CouchDB ...
// Nessa aplicacao sera utlizamos o SQLite por ser mais organizado e mais proximo do mercado

// Knex.js um query builder para query sql
// Permite criar queries para qualquer banco SQL: table('users').selcet('*').where()
// Driver: sqlite3

// npx: executa um pacote ao inves de instala-lo
// npx knex init: cria um arquivo inicial de configuracao do banco de dados

// request, response sao parametros do express
// request armazena os dados que vem da requisicao do usuario
// response é responsavel por retornar uma resposta para o usuario

// ONGS
// rota de listar as ongs do banco de dados
routes.get('/ongs', OngController.index);
// rota de cadastrar uma ong
routes.post ('/ongs', OngController.create);

// INCIDENTS
// rota de listar os incidentes do banco de dados
routes.get('/incidents', IncidentController.index);
// rota de cadastrar um incidente
routes.post('/incidents', IncidentController.create);
// rota de apagar um incidente por seu id
routes.delete('/incidents/:id', IncidentController.delete);

// exporta a variavel do arquivo
module.exports = routes;