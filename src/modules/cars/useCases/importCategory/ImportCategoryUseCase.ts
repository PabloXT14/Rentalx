import { parse } from 'csv-parse';
import fs from 'fs';

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        // CRIANDO STREAM DE LEITURA DO ARQUIVO RECEBIDO PELA ROTA
        const stream = fs.createReadStream(file.path); // passando caminho do arquivo

        // BIBLIOTECA CSVPARSE PARA CONVERTER NOSSO ARQUIVO PARA UM FORMATO ESPECIFICO
        const parseFile = parse();

        // PIPE: SERVE PARA PASSAR O PEDAÇO LIDO DO STREAM PARA ALGUM LUGAR/AÇÃO
        stream.pipe(parseFile);

        // LENDO O QUE FOI RECEBIDO
        parseFile.on('data', async line => {
            console.log(line);
        });
    }
}

export { ImportCategoryUseCase };
