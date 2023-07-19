import { Person } from '@/models/person';
import { PersonsRepository } from '../persons-repository';

export class PersonsRepositoryImpl implements PersonsRepository {
    private _repo: Person[] = [
        new Person('1', 'Walter', 'White', new Date(1958, 8, 7)),
        new Person('2', 'Skyler', 'White', new Date(1970, 10, 8)),
        new Person('2', 'Jesse', 'Pinkman', new Date(1984, 8, 24)),
        new Person('', 'Jane', 'Margolis', new Date(1982, 3, 4)),
    ];

    constructor() {}

    async getAll(): Promise<Person[]> {
        return Promise.resolve(this._repo);
    }

    async getById(id: string): Promise<Person | null> {
        return Promise.resolve(this._repo.find((x) => x.id == id) || null);
    }

    async insert(entity: Person): Promise<void> {
        this._repo.push(entity);

        return Promise.resolve();
    }

    async update(id: string, entity: Person): Promise<void> {
        const updateIndex = this._repo.findIndex((x) => x.id == id);
        this._repo[updateIndex] = entity;

        return Promise.resolve();
    }

    async delete(id: string): Promise<void> {
        this._repo = this._repo.filter((x) => x.id != id);

        return Promise.resolve();
    }
}
