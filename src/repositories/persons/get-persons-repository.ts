import { AppDataSource } from '@/data-source/data-source';
import { Person } from '@/data-source/entities/person';
import { fromDbModel } from '@/mappers/persons';

export const getPersonsRepository = async () => {
    const personsRepository = AppDataSource().getRepository(Person);
    const persons = await personsRepository.find();

    return persons.map((x) => fromDbModel(x));
};
