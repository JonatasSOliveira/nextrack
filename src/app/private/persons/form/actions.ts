'use server'

import { PersonFirebaseAdapter } from "@/adapters/firebase/person"
import { PersonService } from "@/application/services/person"
import { PersonFormSchema } from "./form-schema"
import { getSession } from "@/lib/auth"

export async function createPerson(personData: PersonFormSchema): Promise<void> {
    const session = await getSession()
    const personService = new PersonService(new PersonFirebaseAdapter())
    personService.create({...personData, user_id: session.id})
}
