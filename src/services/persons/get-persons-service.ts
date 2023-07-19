import { Person } from '@/models/person';
import { PersonsRepository } from '@/repositories/persons-repository';

export const getPersonsService =
    (repository: PersonsRepository) => async (): Promise<Person[]> => {
        const response = await repository.getAll();

        return response;
    };
