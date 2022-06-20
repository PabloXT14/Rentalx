import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
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
    const { file } = request.body;

    console.log(file);

    return response.status(200).json('File Uploaded!');
});

export { categoriesRoutes };
