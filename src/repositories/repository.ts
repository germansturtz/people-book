export interface Repository<T, TId> {
    getAll(): Promise<T[]>;

    getById(id: TId): Promise<T | null>;

    insert(entity: T): Promise<void>;

    update(id: TId, entity: T): Promise<void>;

    delete(id: TId): Promise<void>;
}
