const express = require('express');
const routes = express.Router();

const ListController = require('../controllers/ListController');
const ItemController = require('../controllers/ItemController');

routes.get('/lists', ListController.index);
routes.post('/lists', ListController.store);
routes.get('/lists/:listId/items', ItemController.index);
routes.post('/lists/:listId/items', ItemController.store);

module.exports = routes;