const express = require('express');
const routes = express.Router();

const ListController = require('../controllers/ListController');

routes.get('/list', ListController.index);
routes.post('/list', ListController.store);

module.exports = routes;