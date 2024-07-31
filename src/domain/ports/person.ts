import { PersonCreateRequestDTO } from "../dtos/person/request/create";
import { PersonListResponseDTO } from "../dtos/person/response/list";
import { GenericPersistPort } from "./generic-persist";

export interface PersonPort extends GenericPersistPort<PersonCreateRequestDTO, PersonListResponseDTO> {
    update(personId: string, person: PersonCreateRequestDTO): Promise<void>
}
