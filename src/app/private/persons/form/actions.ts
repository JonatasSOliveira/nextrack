'use server'

import { PersonFirebaseAdapter } from "@/adapters/firebase/person"
import { PersonService } from "@/application/services/person"
import { PersonFormSchema } from "./form-schema"
import { getSession } from "@/lib/auth"

export async function createPerson(person: PersonFormSchema): Promise<void> {
    console.log(person, 'Hello from actions')

    const session = await getSession()
    if (!session) throw new Error('Usuário não autenticado')

    const personService = new PersonService(new PersonFirebaseAdapter())
    personService.create({...person, user_id: session.id})
}
