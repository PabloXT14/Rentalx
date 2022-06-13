import { Category } from '../models/Category';

// DTO (Data transfer object) - conceito de criar um objeto/tipagem que será responsável pela trasferência de dados de uma camada/classe para outra da aplicação.
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository {
    findByName(name: string): Category | undefined;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
