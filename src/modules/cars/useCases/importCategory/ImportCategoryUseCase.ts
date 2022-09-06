import { parse } from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            // CRIANDO STREAM DE LEITURA DO ARQUIVO RECEBIDO PELA ROTA
            const stream = fs.createReadStream(file.path); // passando caminho do arquivo
            const categories: IImportCategory[] = [];

            // BIBLIOTECA CSVPARSE PARA CONVERTER NOSSO ARQUIVO PARA UM FORMATO ESPECIFICO
            const parseFile = parse();

            // PIPE: SERVE PARA PASSAR O PEDAÇO LIDO DO STREAM PARA ALGUM LUGAR/AÇÃO
            stream.pipe(parseFile);

            // LENDO O QUE FOI RECEBIDO
            parseFile
                .on('data', async line => {
                    // ["name", "description"]
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on('end', () => {
                    fs.promises.unlink(file.path); // removendo arquivo criado
                    resolve(categories);
                })
                .on('error', err => {
                    console.log(err);
                });
        });
    }

    // INSERINDO CATEGORIAS IMPORTADAS NO REPOSITORY
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async category => {
            const { name, description } = category;

            const existCategory = this.categoriesRepository.findByName(name);

            if (!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export { ImportCategoryUseCase };
