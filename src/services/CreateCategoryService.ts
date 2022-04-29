import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
    name: string;
    description: string;
}

/*
[x] - Definir o tipo de retorno
[x] - Alterar o retorno de erro
[x] - Acessar o repositório
*/

class CreateCategoryService {
    private categoriesRepository: CategoriesRepository;

    constructor(categoriesRepository: CategoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    execute({ name, description }: IRequest): void | Error {
        // Check if categorie already exists
        const categoryAlreadyExists = this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) throw new Error('Category Already exists!');

        // Create Category
        this.categoriesRepository.create({ name, description });
    }

}

export { CreateCategoryService };
