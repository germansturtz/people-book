import { Person } from '@/models/person';
import { Repository } from './repository';

export interface PersonsRepository extends Repository<Person, string> {}
