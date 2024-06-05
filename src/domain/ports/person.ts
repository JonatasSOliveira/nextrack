import { PersonCreateRequestDTO } from "../dtos/person/request/create";
import { PersonListResponseDTO } from "../dtos/person/response/list";
import { GenericPersistPort } from "./generic-persist";

export interface PersonPort extends GenericPersistPort<PersonCreateRequestDTO> {
    list(): Promise<PersonListResponseDTO[]>
}
