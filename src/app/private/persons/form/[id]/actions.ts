'use server'

import { PersonFirebaseAdapter } from '@/adapters/firebase/person'
import { PersonService } from '@/application/services/person'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'
import { getSession } from '@/lib/auth'
import { PersonFormSchema } from '../form-schema'

export async function getPerson(personId: string): Promise<PersonListResponseDTO> {
    const session = await getSession()
    const personService = new PersonService(new PersonFirebaseAdapter())
    return await personService.read(personId, session.id)
}

export async function updatePerson(personData: PersonFormSchema, personId: string): Promise<void> {
    const session = await getSession()
    const personService = new PersonService(new PersonFirebaseAdapter())
    await personService.update(personId, {...personData, user_id: session.id})
}