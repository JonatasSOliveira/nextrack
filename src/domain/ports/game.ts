import { GameCreateRequestDTO } from "../dtos/game/request/create.js";
import { GameListResponseDTO } from "../dtos/game/response/list.js";
import { GenericPersistPort } from "./generic-persist.js";

export interface GamePort extends GenericPersistPort<GameCreateRequestDTO> {
    list(): Promise<GameListResponseDTO[]>
}