import { GenericPersistPort } from "@/domain/ports/generic-persist";

export class GenericService<CreateRequestDTO, ListResponseDTO> implements GenericPersistPort<CreateRequestDTO, ListResponseDTO> {
    constructor(protected adapter: GenericPersistPort<CreateRequestDTO, ListResponseDTO>) { }

    public async create(createDTO: CreateRequestDTO): Promise<void> {
        await this.adapter.create(createDTO)
    }

    public async list(userId: string): Promise<ListResponseDTO[]> {
        return await this.adapter.list(userId)
    }

    public async read(id: string, userId: string): Promise<ListResponseDTO> {
        return await this.adapter.read(id, userId)
    }

    public async logicalDelete(id: string, userId: string): Promise<void> {
        return await this.adapter.logicalDelete(id, userId)
    }
}