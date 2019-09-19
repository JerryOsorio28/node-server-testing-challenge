//import express router
const router = require('express').Router();
//import datadase
const Tests = require('../data/config/db-helpers');

//<------------ GET REQUESTS ----------------
router.get('/', (req, res) => {

    Tests.getTests()
        .then( tests => {
            res.status(200).json(tests)
        })
        // .catch(err => res.status(500).json(err.response))
})
//<------------ POST REQUESTS ----------------
router.post('/', (req, res) => {

    const test = req.body;

    Tests.addTest(test)
        .then( test => {
            res.status(201).json({
                message: `${test} has been sucessfully added to the data`
            })
        })
        .catch(err => res.status(500).json(err.response))
})


//<------------ DELETE REQUESTS ----------------
router.delete('/:id', (req, res) => {

    const { id } = req.params;

    Tests.removeTest(id)
        .then( deleted => {
            res.status(200).json({
                message: `${deleted} has been sucessfully deleted`
            })
        })
        .catch(err => res.status(500).json(err.response))
})

module.exports = router;