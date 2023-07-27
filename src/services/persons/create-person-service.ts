import { Person } from '@/models/person';

export const CreatePersonService = (createPersonRepository: () => boolean) => {
    return (person: Person): string => {
        return 'sarasa';
    };
};
