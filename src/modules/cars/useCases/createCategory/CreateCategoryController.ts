import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        const result = this.createCategoryUseCase.execute({
            name,
            description,
        });

        if (result instanceof Error) {
            return response.status(401).json(result.message);
        }

        return response.status(201).json('Category Created');
    }
}

export { CreateCategoryController };
