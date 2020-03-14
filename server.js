//import express
const express = require('express');
//set express to your server
const server = express();
//teach express to parse body to json
server.use(express.json());
//import datadase
const Tests = require('./data/config/db-helpers');

//<------------ GET REQUESTS ----------------
server.get('/', (req, res) => {

    Tests.getTests()
        .then( tests => {
            res.status(200).json(tests)
        })
        .catch(err => res.status(500).json(err.response))
})
//<------------ POST REQUESTS ----------------
server.post('/', (req, res) => {

    const test = req.body;

    Tests.addTest(test)
        .then(test => {
            res.status(201).json({
                message: `${test} has been sucessfully added to the data`
            })
        })
        .catch(err => res.status(500).json(err.response))
})


//<------------ DELETE REQUESTS ----------------
server.delete('/:id', (req, res) => {

    const { id } = req.params;

    Tests.removeTest(id)
        .then( deleted => {
            res.status(200).json({
                message: `${deleted} has been sucessfully deleted`
            })
        })
        .catch(err => res.status(500).json(err.response))
})



//export your server
module.exports = server;

