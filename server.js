//import express
const express = require('express');
//set express to your server
const server = express();
//teach express to parse body to json
server.use(express.json());
//sanity check
server.get('/', (req, res) => {
    res.send('Server is up and running!')
})
//export your server
module.exports = server;
