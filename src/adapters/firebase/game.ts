import { GameCreateRequestDTO } from '@/domain/dtos/game/request/create'
import { GameListResponseDTO } from '@/domain/dtos/game/response/list'
import { GamePort } from '@/domain/ports/game'
import { GameFirebaseRepository } from './repositories/game'

export class GameFirebaseAdapter implements GamePort {
    private gameRepository = new GameFirebaseRepository()

    public async create(game: GameCreateRequestDTO): Promise<void> {
        await this.gameRepository.create(game)
    }

    public async list(): Promise<GameListResponseDTO[]> {
        return await this.gameRepository.list()
    }

}