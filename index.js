const express = require('express');
const server = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const projectModel = require('./data/projectModel.js')
const actionModel = require('./data/actionModel.js')

server.use(express.json());
server.use(helmet())
server.use(cors())
server.use(morgan("dev"))
server.use("/projectModel", projectModel)
server.use('/actionModel', actionModel)

const port = 9000;

server.listen(port, err => {
    console.log(`\n===> The server is up and running on port: ${port} <===\n`)
})