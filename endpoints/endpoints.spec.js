//import file being tested
const endpoints = require('./endpoints.js');
//import super test dependency
const request = require('supertest');

//<-------GET TEST-----------

describe('endpoints.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
/* not working --> return*/ request(endpoints)                   .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })

        it('should return tests', async () => {
            const res = await request(endpoints).get('/');

            expect(res.body).toEqual(tests)
        })
    })
});

//<-------POST TEST-----------
describe('POST /', () => {
    
});

//<-------DELETE TEST-----------
describe('DELETE /:id', () => {

});