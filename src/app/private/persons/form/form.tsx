'use client'

import { PersonFirebaseAdapter } from '@/adapters/firebase/person'
import { PersonService } from '@/application/services/person'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

const personService = new PersonService(new PersonFirebaseAdapter())

const personFormSchema = z.object({
    name: z.string()
})

type PersonFormSchema = z.infer<typeof personFormSchema>

export default function PersonFormComponent() {
    const router = useRouter()

    const { register, handleSubmit } = useForm<PersonFormSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(personFormSchema),
    })

    const handleCreatePerson = async (data: PersonFormSchema) => {
        await personService.create(data)
    }

    const goBack = () => router.back()

    return (
        <form onSubmit={handleSubmit(handleCreatePerson)}>
            <CardContent>
                <Label htmlFor="name">Nome</Label>
                <Input {...register('name')} type="text" id="name" autoFocus  />
            </CardContent>
            <CardFooter className='flex flex-row gap-2 justify-around'>
                <Button type='button' onClick={goBack}>Voltar</Button>
                <Button type='submit'>Cadastrar</Button>
            </CardFooter>
        </form>
    )
}
