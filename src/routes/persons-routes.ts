import { getPersonsController } from '@/controllers/persons/get-persons';
import { PersonsRepositoryImpl } from '@/repositories/implementation/persons-repository-impl';
import { getPersonsService } from '@/services/persons/get-persons-service';
import { Router } from 'express';

export default (): Router => {
    const router = Router();

    const getPersons = getPersonsController(
        getPersonsService(new PersonsRepositoryImpl())
    );

    router.get('/', getPersons);

    return router;
};