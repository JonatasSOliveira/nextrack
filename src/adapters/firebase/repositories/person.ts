import { PersonCreateRequestDTO } from '@/domain/dtos/person/request/create'
import { GenericFirebaseRepository } from './generic'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'
import { DocumentReference, addDoc, collection, doc } from 'firebase/firestore'

interface PersonGameDataSchema {
    category_ref: DocumentReference
    game_ref: DocumentReference
}

export class PersonFirebaseRepository extends GenericFirebaseRepository<PersonCreateRequestDTO, PersonListResponseDTO> {

    constructor() {
        super('persons')
    }

    public async createGame(personId: string, data: PersonGameDataSchema): Promise<void> {
        await addDoc(collection(doc(this.col, personId,), 'games'), data as any)
    }

}