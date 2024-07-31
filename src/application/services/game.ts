import { GameCreateRequestDTO } from "@/domain/dtos/game/request/create";
import { GameListResponseDTO } from "@/domain/dtos/game/response/list";
import { GamePort } from "@/domain/ports/game";
import { GenericService } from "./generic";

export class GameService extends GenericService<GameCreateRequestDTO, GameListResponseDTO> implements GamePort {

    constructor(gameAdapter: GamePort) {
        super(gameAdapter)
    }

}