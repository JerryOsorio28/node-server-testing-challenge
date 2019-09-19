const db = require('./db-config');
const Helpers = require('./db-helpers');

describe('GET /', () => {

    beforeEach(async () => {
        await db('tests').truncate();
    })

    describe('insert function', () => {
        it('should insert tests into the db', async () => {
            let testsNumber;
            testsNumber = await db('tests');
            expect(testsNumber).toHaveLength(0);
            await Helpers.addTest({ name: 'Test #1'})
            testNumber = await db('tests');
            expect(testNumber).toHaveLength(1);
        })
    })
});