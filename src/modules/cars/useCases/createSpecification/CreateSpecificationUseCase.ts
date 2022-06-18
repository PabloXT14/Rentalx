import { ISpecificatonsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificatonsRepository) {}

    // eslint-disable-next-line consistent-return
    execute({ name, description }: IRequest): void | Error {
        const specificationAlreadyExists =
            this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            return new Error('Specification already exists!');
        }

        this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
