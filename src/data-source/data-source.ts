import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Initial1690044394868 } from './migration/1690044394868-initial';
import { Person } from './entities/person';

const options = (): DataSourceOptions => {
    const entities = [Person];
    const migrations = [Initial1690044394868];
    if (process.env.ENVIRONMENT === 'test') {
        return {
            type: 'sqlite',
            database: ':memory:',
            dropSchema: true,
            entities: entities,
            migrations: migrations,
            synchronize: true,
            logging: false,
        };
    }

    return {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'people_book',
        synchronize: true,
        logging: false,
        entities: entities,
        migrations: migrations,
        subscribers: [],
    };
};

let appDataSource: DataSource;

export const AppDataSource = () => {
    if (!appDataSource) {
        appDataSource = new DataSource(options());
    }

    return appDataSource;
};
