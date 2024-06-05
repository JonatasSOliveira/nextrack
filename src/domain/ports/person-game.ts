import { PersonGameCreateRequestDTO } from '../dtos/person-game/request/create'

export interface PersonGamePort {
    create(personGame: PersonGameCreateRequestDTO): Promise<void>
}