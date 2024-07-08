import { PersonCreateRequestDTO } from '@/domain/dtos/person/request/create'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'
import { PersonPort } from '@/domain/ports/person'
import { PersonFirebaseRepository } from './repositories/person'

export class PersonFirebaseAdapter implements PersonPort {
    private personRepository = new PersonFirebaseRepository()

    public async create(person: PersonCreateRequestDTO): Promise<void> {
        await this.personRepository.create(person)
    }

    public async list(userId: string): Promise<PersonListResponseDTO[]> {
        return await this.personRepository.list(userId)
    }

    public async read(personId: string, userId: string): Promise<PersonListResponseDTO> {
        return await this.personRepository.read(personId, userId)
    }

    public async delete(personId: string): Promise<void> {
        console.log('Hello from server', personId)
    }

    public async update(personId: string, person: PersonCreateRequestDTO): Promise<void> {
        await this.personRepository.update(personId, person.user_id, person)
    }
}
