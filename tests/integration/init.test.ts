import request from 'supertest';
import makeApp from '@/app';
import { AppDataSource } from '@/data-source/data-source';

let APP: unknown;

describe('Init tests', () => {
    beforeAll(async () => {
        process.env.ENVIRONMENT = 'test';
        await AppDataSource().initialize();
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
