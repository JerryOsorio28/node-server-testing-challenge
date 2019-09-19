const db = require('./db-config');

module.exports = {
    getTests,
    addTest,
    removeTest
};

async function getTests (test) {
    const [ id ] =  await db('tests')
        .insert(test, 'id')
        
    return db('tests')
        .where({ id })
        .first()
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