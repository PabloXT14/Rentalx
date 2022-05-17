import { SpecificationRepository } from "../repositories/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}


class CreateSpecificationService {
    constructor(private specificationsRepository: SpecificationRepository) { }

    execute({ name, description }: IRequest): void | Error {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }

        this.specificationsRepository.create({
            name,
            description
        })
    }
}

export { CreateSpecificationService };