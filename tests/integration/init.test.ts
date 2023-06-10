import request from 'supertest';
import makeApp from '@/app';

let APP: unknown;

describe('Init tests', () => {
    beforeAll(async () => {
        APP = await makeApp();
    });

    describe('GET /', () => {
        it('should respond with Hello World', async () => {
            const response = await request(APP).get('/').send();

            expect(response.statusCode).toBe(200);
            expect(response.body.message).toBe('Hello World');
        });
    });
});
