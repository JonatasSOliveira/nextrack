'use client'

import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { homePageDefinition } from '../private/home/page-definition'
import { AuthSignUpFormData } from './form-schema'
import { authSignInFormSchema } from '../form-schema'
import { signUp } from './actions'


export default function AuthSignUpFormComponent() {
    const router = useRouter()

    const { register, handleSubmit } = useForm<AuthSignUpFormData>({
        mode: 'onSubmit',
        resolver: zodResolver(authSignInFormSchema),
    })

    const formAction: () => void = handleSubmit(async (data: AuthSignUpFormData) => {
        await signUp(data);
        router.push(homePageDefinition.path)
    });

    const goBack = () => router.back()

    return (
        <form action={formAction}>
            <CardContent className='flex flex-col gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input {...register('email')} id='email' type='email' placeholder='Email' autoFocus />
                <Label htmlFor='password'>Senha</Label>
                <Input {...register('password')} id='password' type='password' placeholder='Senha' />
                <Label htmlFor='password'>Confirmar senha</Label>
                <Input {...register('confirm_password')} id='confirm-password' type='password' placeholder='Confirmar senha' />
            </CardContent>
            <CardFooter className='flex flex-row gap-2 justify-around'>
                <Button type='button' onClick={goBack}>Voltar</Button>
                <Button type='submit'>Cadastrar</Button>
            </CardFooter>
        </form>
    )
}
