'use client'

import { PersonFirebaseAdapter } from '@/adapters/firebase/person'
import { PersonService } from '@/application/services/person'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const personService = new PersonService(new PersonFirebaseAdapter())

const personFormSchema = z.object({
    name: z.string()
})

type PersonFormSchema = z.infer<typeof personFormSchema>

export default function PersonFormComponent() {
    const { register, handleSubmit } = useForm<PersonFormSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(personFormSchema),
    })

    const handleCreatePerson = async (data: PersonFormSchema) => {
        await personService.create(data)
    }

    return (
        <form onSubmit={handleSubmit(handleCreatePerson)}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register('name')} />
            <button type="submit">Submit</button>
        </form>
    )
}
