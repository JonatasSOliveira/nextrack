import { PersonCreateRequestDTO } from "../dtos/person/request/create";
import { PersonListResponseDTO } from "../dtos/person/response/list";
import { GenericPersistPort } from "./generic-persist";

export interface PersonPort extends GenericPersistPort<PersonCreateRequestDTO> {
    list(userId: string): Promise<PersonListResponseDTO[]>
    read(personId: string, userId: string): Promise<PersonListResponseDTO>
    logicalDelete(personId: string, userId: string): Promise<void>
    update(personId: string, person: PersonCreateRequestDTO): Promise<void>
}
