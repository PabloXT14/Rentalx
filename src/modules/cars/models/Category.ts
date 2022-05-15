import { v4 as uuidV4 } from 'uuid';

class Category {
    id?: string;
    name: string;
    description: string;
    created_at: Date;

    // Método que é executado ao criar uma instância da classe
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Category };
