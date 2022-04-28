import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

// Rota Cadastro de Categories
categoriesRoutes.post('/', (request, response) => {
    const { name, description } = request.body;

    return response.status(201).json('Category Created');
});

// Rota Listar todas as Categories
categoriesRoutes.get('/', (request, response) => {
    const allCategories = categoriesRepository.list();

    return response.status(200).json(allCategories);
});

export { categoriesRoutes };
