const express = require('express');
const routes = require('./src/routes/routes');
const app = express();
const server = require('http').Server(app);
const mongoose = require('./src/config/connection');

const LISTEN_PORT = 5000;

app.use(express.json());
app.use(routes);

server.listen(LISTEN_PORT);