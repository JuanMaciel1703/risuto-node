const express = require('express');
const routes = express.Router();

const ListController = require('../controllers/ListController');
const ItemController = require('../controllers/ItemController');
const UserController = require('../controllers/UserController');

routes.get('/users/:id', UserController.index);
routes.post('/users/', UserController.store);

routes.get('/users/:userId/lists', ListController.index);
routes.post('/users/:userId/lists', ListController.store);

routes.get('/users/:userId/lists/:listId/items', ItemController.index);
routes.post('/users/:userId/lists/:listId/items', ItemController.store);

module.exports = routes;