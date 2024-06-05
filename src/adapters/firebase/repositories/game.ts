import { GameCreateRequestDTO } from '@/domain/dtos/game/request/create'
import { GenericFirebaseRepository } from './generic'
import { GameListResponseDTO } from '@/domain/dtos/game/response/list'

export class GameFirebaseRepository extends GenericFirebaseRepository<GameCreateRequestDTO, GameListResponseDTO> {

    constructor() {
        super('games')
    }

}