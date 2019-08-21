const express = require('express') 
const routes = express.Router() 
const authMiddleware = require('../middleware/auth') 

const ListController = require('../controllers/ListController') 
const ItemController = require('../controllers/ItemController') 
const UserController = require('../controllers/UserController') 
const AuthController = require('../controllers/AuthController') 

routes.post('/login', AuthController.login) 
routes.post('/logout', authMiddleware, AuthController.logout) 
routes.post('/logoutall', authMiddleware, AuthController.logoutAll) 

routes.get('/users/:id', UserController.index) 
routes.post('/users', UserController.store) 

routes.get('/users/:userId/lists', authMiddleware, ListController.index) 
routes.post('/users/:userId/lists', authMiddleware, ListController.store) 

routes.get('/users/:userId/lists/:listId/items', authMiddleware, ItemController.index) 
routes.post('/users/:userId/lists/:listId/items', authMiddleware, ItemController.store) 

module.exports = routes 