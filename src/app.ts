import express, { json, Request, Response } from 'express';
import personsRoutes from './routes/persons-routes';

export default async function () {
    const app = express();

    app.use(json());

    app.use('/persons', personsRoutes());

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: 'Hello World' });
    });

    return app;
}
