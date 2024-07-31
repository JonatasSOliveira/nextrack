import { PersonCreateRequestDTO } from "@/domain/dtos/person/request/create";
import { PersonListResponseDTO } from "@/domain/dtos/person/response/list";
import { PersonPort } from "@/domain/ports/person";
import { GenericService } from "./generic";

export class PersonService extends GenericService<PersonCreateRequestDTO, PersonListResponseDTO> implements PersonPort {
    constructor(private personAdapter: PersonPort) {
        super(personAdapter)
    }

    public async update(personId: string, person: PersonCreateRequestDTO): Promise<void> {
        await this.personAdapter.update(personId, person)
    }
}
