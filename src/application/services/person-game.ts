import { PersonGameCreateRequestDTO } from '@/domain/dtos/person-game/request/create'
import { PersonGamePort } from '@/domain/ports/person-game'

export class PersonGameService implements PersonGamePort {

    constructor(private adapter: PersonGamePort) { }

    public async create(personGame: PersonGameCreateRequestDTO): Promise<void> {
        await this.adapter.create(personGame)
    }

}