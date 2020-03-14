const db = require('./db-config');

module.exports = {
    getTests,
    addTest,
    removeTest
};

function getTests () {
    return db('tests')
}

function addTest (test) {
    return db('tests')
        .insert(test)
}
function removeTest (id) {
    return db('tests')
        .where({ id })
        .first()
        .del()
}