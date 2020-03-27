/**
 *  Rota / Recurso
 */

/**
 * Método HTTP
 * GET:Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de Parâmetros
  * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route: Parâmetros utilizados para identificar recursos
  * Request: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * Bancos de Dados
 * SQL: MySQL, SQLite, PostgreSQL, Oracle
 * NoSQL: MongoDB, CouchDB
 */

 /**
  * Tipos de Pesquisa
  * Driver: select * from users;
  * Query Builders: table('users').select('*').where();
  */


const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;