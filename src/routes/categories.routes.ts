import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCategoryService';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// Rota Cadastro de Categories
categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(categoriesRepository);

    const result = createCategoryService.execute({ name, description });

    if (result instanceof Error) {
        return response.status(401).json(result);
    }

    return response.status(201).json('Category Created');
});

// Rota Listar todas as Categories
categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(200).json(allCategories);
});

export { categoriesRoutes };
