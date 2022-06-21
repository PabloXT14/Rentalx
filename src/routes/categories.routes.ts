import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
    dest: './tmp',
});

// Rota Cadastro de Categories
categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request, response);
});

// Rota Listar todas as Categories
categoriesRoutes.get('/', (request, response) => {
    return listCategoriesController.handle(request, response);
});

// Rota de Upload de arquivos
categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
    importCategoryController.handle(request, response);
});

export { categoriesRoutes };
