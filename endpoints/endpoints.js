//import express router
const router = require('express').Router();
//import datadase
const db = require('../data/config/db-config');

//<------------ GET REQUESTS ----------------
router.get('/tests', (req, res) => {

    db('tests')
        .then( tests => {
            res.status(201).json(tests)
        })
        .catch(err => res.status(500).json(err.response))
})
//<------------ POST REQUESTS ----------------
router.post('/tests', (req, res) => {

    const name = req.body;

    db('tests').insert(name)
        .then( name => {
            console.log(name)
            res.status(201).json({
                message: `${name} has been sucessfully added to the data`
            })
        })
        .catch(err => res.status(500).json(err.response))
})


//<------------ DELETE REQUESTS ----------------


module.exports = router;