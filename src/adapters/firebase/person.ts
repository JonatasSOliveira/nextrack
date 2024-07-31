import { PersonCreateRequestDTO } from '@/domain/dtos/person/request/create'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'
import { PersonPort } from '@/domain/ports/person'
import { PersonFirebaseRepository } from './repositories/person'
import { GenericFirebaseAdapter } from './generic'

export class PersonFirebaseAdapter extends GenericFirebaseAdapter<PersonCreateRequestDTO, PersonListResponseDTO> implements PersonPort {

    constructor() {
        super(new PersonFirebaseRepository())
    }

    public async update(personId: string, person: PersonCreateRequestDTO): Promise<void> {
        await this.repository.update(personId, person.user_id, person)
    }
}
