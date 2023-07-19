import { toPersonOutput } from '@/mappers/persons';
import { Person } from '@/models/person';
import { Request, Response } from 'express';

export const getPersonsController =
    (getPersonsService: () => Promise<Person[]>) =>
    async (request: Request, response: Response) => {
        try {
            const persons = await getPersonsService();
            const responseBody = persons.map((entity) =>
                toPersonOutput(entity)
            );

            response.statusCode = 200;
            response.json(responseBody);
        } catch (error) {
            console.log(error);

            if (error instanceof AggregateError) {
                response.status(400).send({
                    message: error.message,
                    errors: error.errors.map((x) => x.message),
                });
            }
        }
    };
