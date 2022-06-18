import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

// Rota Criação de Especificação
specificationsRoutes.post('/', (request, response) => {
    createSpecificationController.handle(request, response);
});

export { specificationsRoutes };
