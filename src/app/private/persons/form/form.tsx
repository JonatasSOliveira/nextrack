'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { PersonFormSchema, personFormSchema } from './form-schema'
import { createPerson } from './actions'


export default function PersonFormComponent() {
    const router = useRouter()

    const { register, handleSubmit } = useForm<PersonFormSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(personFormSchema),
    })

    const goBack = () => router.back()

    const formAction: () => void = handleSubmit(async (data: PersonFormSchema) => {
        await createPerson(data)
    });

    return (
        <form action={formAction}>
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
