import React from 'react'
import { PersonFirebaseAdapter } from '@/adapters/firebase/person'
import { PersonService } from '@/application/services/person'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { getSession } from '@/lib/auth'

import Link from 'next/link'
import DeletePersonAlert from './delete-person-alert'

const personService = new PersonService(new PersonFirebaseAdapter())

export default async function PersonsList() {
    const session = await getSession()
    if (!session) throw new Error('Usuário não autenticado')

    const persons = await personService.list(session.id)

    return <div className='flex flex-col gap-2'>
        {persons.map(person => (
            <Card key={person.id}>
                <CardHeader>
                    <p className="text-sm font-medium leading-none">{person.name}</p>
                </CardHeader>
                <CardFooter className='flex flex-row gap-2 justify-center'>
                    <DeletePersonAlert person={person}/>
                    <Link href={`/private/persons/form/${person.id}`} className={buttonVariants({ variant: "outline" })}>Editar</Link>
                </CardFooter>
            </Card>
        ))}
    </div>
}
