import { getPersonsController } from '@/controllers/persons/get-persons';
import { getPersonsService } from '@/services/persons/get-persons-service';
import { Router } from 'express';

export default (): Router => {
    const router = Router();

    const getPersons = getPersonsController(getPersonsService());

    router.get('/', getPersons);

    return router;
};
