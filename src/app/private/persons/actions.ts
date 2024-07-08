'use server'

import { PersonFirebaseAdapter } from "@/adapters/firebase/person"
import { PersonService } from "@/application/services/person"
import { getSession } from "@/lib/auth"

export async function deletePerson(personId: string) {
    const session = await getSession()
    const personService = new PersonService(new PersonFirebaseAdapter())
    await personService.logicalDelete(personId, session.id)
}

export async function getPersons() {
    const session = await getSession()
    const personService = new PersonService(new PersonFirebaseAdapter())
    return await personService.list(session.id)
}