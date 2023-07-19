import { PersonInput } from '@/dtos/person-input';
import { PersonOuput } from '@/dtos/person-output';
import { Person } from '@/models/person';

export const toPersonOutput = (person: Person): PersonOuput => {
    return {
        id: person.id,
        name: person.name,
        lastname: person.lastname,
        birthdate: person.birthdate,
    } as PersonOuput;
};

export const fromPersonInput = (person: PersonInput): Person => {
    return new Person('sarasa', person.name, person.lastname, person.birthdate);
};
