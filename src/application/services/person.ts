import { PersonCreateRequestDTO } from "@/domain/dtos/person/request/create";
import { PersonListResponseDTO } from "@/domain/dtos/person/response/list";
import { PersonPort } from "@/domain/ports/person";

export class PersonService implements PersonPort {
    constructor(private adapter: PersonPort) { }

    public async create(person: PersonCreateRequestDTO): Promise<void> {
        await this.adapter.create(person)
    }

    public async list(): Promise<PersonListResponseDTO[]> {
        return await this.adapter.list()
    }

}