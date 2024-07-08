'use server'

import { PersonFirebaseAdapter } from "@/adapters/firebase/person"
import { PersonService } from "@/application/services/person"

export async function deletePerson(personId: string) {
    const personService = new PersonService(new PersonFirebaseAdapter())
    await personService.delete(personId)
}