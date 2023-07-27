import { AppDataSource } from '@/data-source/data-source';
import { Person } from '@/data-source/entities/person';
import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';

export const createPerson = async (person: Person) => {
    const personsRepository = AppDataSource().getRepository(Person);

    await personsRepository.insert(person);
};

export const setTestData = async () => {
    const persons: Person[] = [
        {
            id: randomUUID(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: faker.date.birthdate(),
        },
        {
            id: randomUUID(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: faker.date.birthdate(),
        },
        {
            id: randomUUID(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: faker.date.birthdate(),
        },
        {
            id: randomUUID(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            birthdate: faker.date.birthdate(),
        },
    ];

    for (const person of persons) {
        person.birthdate = new Date(
            person.birthdate.getFullYear(),
            person.birthdate.getMonth(),
            person.birthdate.getDate(),
            0,
            0,
            0,
            0
        );
        await createPerson(person);
    }
};
