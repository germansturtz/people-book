import express, { json, Request, Response } from 'express';

export default async function () {
    const app = express();

    app.use(json());

    app.get('/', (req: Request, res: Response) => {
        res.status(200).json({ message: 'Hello World' });
    });

    return app;
}
