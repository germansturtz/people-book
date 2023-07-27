import { Person } from '@/models/person';
import { getPersonsRepository } from '@/repositories/persons/get-persons-repository';

export const getPersonsService = () => async (): Promise<Person[]> => {
    const response = await getPersonsRepository();

    return response;
};
