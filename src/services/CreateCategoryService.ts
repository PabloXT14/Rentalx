import { Category } from '../models/Category';

interface IRequest {
    name: string;
    description: string;
}

/*
[] - Definir o tipo de retorno
[x] - Alterar o retorno de erro
[] - Acessar o repositório
[] - Retornar algo
*/

class CreateCategoryService {
    execute({ name, description }: IRequest) {
        // Check if categorie already exists
        const categoryAlreadyExists = categoriesRepository.findByName(name);

        if (categoryAlreadyExists) throw new Error('Category Already exists!');

        // Create Category
        categoriesRepository.create({ name, description });
    }
    
}

export { CreateCategoryService };
