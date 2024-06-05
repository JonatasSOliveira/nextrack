import { PersonCreateRequestDTO } from '@/domain/dtos/person/request/create'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'
import { PersonPort } from '@/domain/ports/person'
import { PersonFirebaseRepository } from './repositories/person'

export class PersonFirebaseAdapter implements PersonPort {
    private personRepository = new PersonFirebaseRepository()

    public async create(person: PersonCreateRequestDTO): Promise<void> {
        await this.personRepository.create(person)
    }

    public async list(): Promise<PersonListResponseDTO[]> {
        return await this.personRepository.list()
    }

}