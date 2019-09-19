//import file being tested
const server = require('./server.js')
//import super test dependency
const request = require('supertest');

//<-------GET TEST-----------

describe('server.js', () => {
    describe('GET /', () => {
        it('returns 200 OK', () => {
            return request(server)                   
            .get('/')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
});

//<-------POST TEST-----------
describe('server.js', () => {
    describe('POST /', () => {
        it('returns 201 Created', () => {
            return request(server)                   
            .post('/')
            .then(res => {
                expect(res.status).toBe(201)
            })
        })
    })
});

//<-------DELETE TEST-----------
describe('server.js', () => {
    describe('DELETE /', () => {
        it('returns 200 OK', () => {
            return request(server)                   
            .delete('/:id')
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    })
});