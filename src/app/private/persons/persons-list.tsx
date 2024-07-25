'use client'

import React, { useTransition, useState, use, useEffect } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import DeletePersonAlert from './delete-person-alert'
import { personFormPageDefinition } from './form/page-definition'
import { getPersons } from './actions'
import { PersonListResponseDTO } from '@/domain/dtos/person/response/list'

export default async function PersonsList() {
    const [isPending, startTransition] = useTransition();
    const [persons, setPersons] = useState<PersonListResponseDTO[]>([])

    const handleGetPersons = () => startTransition(async () => {
        const persons = await getPersons()
        setPersons(persons)
    })

    useEffect(() => {handleGetPersons()}, [])

    return <div className='flex flex-col gap-2'>
        {!isPending && persons.map(person => (
            <Card key={person.id}>
                <CardHeader>
                    <p className="text-sm font-medium leading-none">{person.name}</p>
                </CardHeader>
                <CardFooter className='flex flex-row gap-2 justify-center'>
                    <DeletePersonAlert person={person} handleGetPersons={handleGetPersons}/>
                    <Link href={`${personFormPageDefinition.path}/${person.id}`} 
                        className={buttonVariants({ variant: "outline" })}>
                        Editar
                    </Link>
                </CardFooter>
            </Card>
        ))}
    </div>
}
