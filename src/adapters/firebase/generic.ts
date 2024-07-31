import { GenericPersistPort } from "@/domain/ports/generic-persist";
import { GenericFirebaseRepository } from "./repositories/generic";

export class GenericFirebaseAdapter<CreateRequestDTO, ListResponseDTO> implements GenericPersistPort<CreateRequestDTO, ListResponseDTO> {
    constructor(protected repository: GenericFirebaseRepository<CreateRequestDTO, ListResponseDTO>) { }

    public async create(person: CreateRequestDTO): Promise<void> {
        await this.repository.create(person)
    }

    public async list(userId: string): Promise<ListResponseDTO[]> {
        return await this.repository.list(userId)
    }

    public async read(personId: string, userId: string): Promise<ListResponseDTO> {
        return await this.repository.read(personId, userId)
    }

    public async logicalDelete(personId: string, userId: string): Promise<void> {
        return await this.repository.logicalDelete(personId, userId)
    }

}