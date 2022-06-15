import { Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// Rota Cadastro de Categories
categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

// Rota Listar todas as Categories
categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(200).json(allCategories);
});

export { categoriesRoutes };
