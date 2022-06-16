import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

// Rota Cadastro de Categories
categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

// Rota Listar todas as Categories
categoriesRoutes.get('/', (request, response) => {
    return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
