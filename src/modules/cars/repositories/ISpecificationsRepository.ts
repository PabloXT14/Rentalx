import { Specification } from "../models/Specification";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificatonsRepository {
    create({ name, description }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification | undefined;
}

export { ISpecificatonsRepository, ICreateSpecificationDTO }