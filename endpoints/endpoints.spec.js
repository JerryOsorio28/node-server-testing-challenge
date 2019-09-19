//import file being tested
const endpoints = require('./endpoints.js');
//import super test dependency
const request = require('supertest');

//<-------GET TEST-----------

describe('endpoints.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
            return request(endpoints).get('/')
                .then(res => {
                    expect(res.status).toBe(500)
                })
        })
})
});

//<-------POST TEST-----------
describe('POST /', () => {
    
});

//<-------DELETE TEST-----------
describe('DELETE /:id', () => {

});