import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
    constructor(
        private createSpecificationUseCase: CreateSpecificationUseCase,
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        const result = this.createSpecificationUseCase.execute({
            name,
            description,
        });

        if (result instanceof Error) {
            return response.status(401).json(result.message);
        }

        return response.status(201).json('Specification created with success!');
    }
}

export { CreateSpecificationController };
