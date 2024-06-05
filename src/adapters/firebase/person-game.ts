import { PersonGameCreateRequestDTO } from '@/domain/dtos/person-game/request/create'
import { PersonGamePort } from '@/domain/ports/person-game'
import { PersonFirebaseRepository } from './repositories/person'
import { CategoryFirebaseRepository } from './repositories/category'
import { GameFirebaseRepository } from './repositories/game'

export class PersonGameFirebaseAdapter implements PersonGamePort {
    private personRepository = new PersonFirebaseRepository()
    private categoryRepository = new CategoryFirebaseRepository()
    private gameRepository = new GameFirebaseRepository()

    public async create(personGame: PersonGameCreateRequestDTO): Promise<void> {
        const categoryRef = this.categoryRepository.getRef(personGame.category_id)
        const gameRef = this.gameRepository.getRef(personGame.game_id)
        this.personRepository.createGame(personGame.person_id, { category_ref: categoryRef, game_ref: gameRef })
    }
}