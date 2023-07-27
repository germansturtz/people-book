import request from 'supertest';
import makeApp from '@/app';
import { setTestData } from './factories/persons-factory';
import { Person } from '@/data-source/entities/person';
import { AppDataSource } from '@/data-source/data-source';
import { PersonOutput } from '@/dtos/person-output';

let APP: unknown;
let persons: Person[];

describe('Persons tests', () => {
    beforeAll(async () => {
        process.env.ENVIRONMENT = 'test';
        await AppDataSource().initialize();

        APP = await makeApp();

        await setTestData();
    });

    describe('GET /persons', () => {
        it('should return list of persons', async () => {
            const response = await request(APP).get('/persons').send();

            expect(response.statusCode).toBe(200);

            const personsRepository = AppDataSource().getRepository(Person);
            const persons = await personsRepository.find();
            expect(response.body).toEqual(
                persons.map((person) => ({
                    id: person.id,
                    name: person.firstName,
                    lastname: person.lastName,
                    birthdate: person.birthdate,
                }))
            );
        });
    });
});
