const express = require('express');
const server = express();

const projectModel = require('./data/helpers/projectModel')
const actionModel = require('./data/helpers/actionModel')

server.use(express.json())
server.use('/projectModel', projectModel);
server.use('/actionModel', actionModel);

const port = 9000;

server.listen(port, err => {
    console.log(`\n===> The server is up and running on port: ${port} <===\n`)
})