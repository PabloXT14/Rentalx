import { response, Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationRepository();

// Rota Criação de Especificação
specificationsRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createSpecificationService = new CreateSpecificationService(
        specificationsRepository,
    );

    const result = createSpecificationService.execute({ name, description });

    if (result instanceof Error) {
        return response.status(401).json(result.message);
    }

    return response.status(201).json('Specification created with success!');
});

export { specificationsRoutes };
