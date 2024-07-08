import { PersonCreateRequestDTO } from "@/domain/dtos/person/request/create";
import { PersonListResponseDTO } from "@/domain/dtos/person/response/list";
import { PersonPort } from "@/domain/ports/person";

export class PersonService implements PersonPort {
    constructor(private adapter: PersonPort) { }

    public async create(person: PersonCreateRequestDTO): Promise<void> {
        await this.adapter.create(person)
    }

    public async list(userId: string): Promise<PersonListResponseDTO[]> {
        return await this.adapter.list(userId)
    }

    public async read(personId: string, userId: string): Promise<PersonListResponseDTO> {
        return await this.adapter.read(personId, userId);
    }
    
    public async delete(personId: string): Promise<void> {
        await this.adapter.delete(personId)
    }

    public async update(personId: string, person: PersonCreateRequestDTO): Promise<void> {
        await this.adapter.update(personId, person)
    }
}
