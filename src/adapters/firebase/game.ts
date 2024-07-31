import { GameCreateRequestDTO } from '@/domain/dtos/game/request/create'
import { GameListResponseDTO } from '@/domain/dtos/game/response/list'
import { GamePort } from '@/domain/ports/game'
import { GameFirebaseRepository } from './repositories/game'
import { GenericFirebaseAdapter } from './generic'

export class GameFirebaseAdapter extends GenericFirebaseAdapter<GameCreateRequestDTO, GameListResponseDTO> implements GamePort {

    constructor() {
        super(new GameFirebaseRepository())
    }

}