import { Specification } from '../models/Specification';
import { ICreateSpecificationDTO, ISpecificatonsRepository } from "./ISpecificationsRepository";


class SpecificationRepository implements ISpecificatonsRepository {
    private specifications: Specification[];

    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date()
        })

        this.specifications.push(specification);
    }

    findByName(name: string): Specification | undefined {
        const specification = this.specifications.find(specification => specification.name === name);

        return specification;
    }
}

export { SpecificationRepository }