import { PersonInput } from '@/dtos/person-input';
import { PersonOutput } from '@/dtos/person-output';
import { Person } from '@/models/person';
import { Person as PersonEntity } from '@/data-source/entities/person';

export const toPersonOutput = (person: Person): PersonOutput => {
    return {
        id: person.id,
        name: person.name,
        lastname: person.lastname,
        birthdate: person.birthdate,
    } as PersonOutput;
};

export const fromPersonInput = (person: PersonInput): Person => {
    return new Person('sarasa', person.name, person.lastname, person.birthdate);
};

export const fromDbModel = (person: PersonEntity): Person => {
    return new Person(
        person.id,
        person.firstName,
        person.lastName,
        person.birthdate
    );
};
