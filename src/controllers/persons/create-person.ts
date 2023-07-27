import { fromPersonInput } from '@/mappers/persons';
import { Request, Response } from 'express';

export const CreatePerson = (createPersonService: () => string) => {
    return (request: Request, response: Response) => {
        try {
            const person = fromPersonInput(request.body);
            const id = createPersonService();

            response.statusCode = 200;
            response.json({ id: id });
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
};
