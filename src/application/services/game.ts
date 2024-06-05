import { GameCreateRequestDTO } from "@/domain/dtos/game/request/create";
import { GameListResponseDTO } from "@/domain/dtos/game/response/list";
import { GamePort } from "@/domain/ports/game";

export class GameService implements GamePort {

    constructor(private adapter: GamePort) { }

    public async create(game: GameCreateRequestDTO): Promise<void> {
        await this.adapter.create(game)
    }

    public async list(): Promise<GameListResponseDTO[]> {
        return await this.adapter.list()
    }

}