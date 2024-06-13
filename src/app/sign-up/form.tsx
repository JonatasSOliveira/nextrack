'use client'

import { FirebaseAuthAdapter } from '@/adapters/firebase/auth'
import { AuthService } from '@/application/services/auth'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { homePageDefinition } from '../private/home/page'

const authService = new AuthService(new FirebaseAuthAdapter())

const authSignInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
}).superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
            code: 'custom',
            message: 'The passwords did not match',
            path: ['confirmPassword']
        });
    }
});

type AuthSignUpFormData = z.infer<typeof authSignInFormSchema>


export default function AuthSignUpFormComponent() {
    const router = useRouter()

    const { register, handleSubmit } = useForm<AuthSignUpFormData>({
        mode: 'onSubmit',
        resolver: zodResolver(authSignInFormSchema),
    })

    const handleSignUp = async (data: AuthSignUpFormData) => {
        const signUpResponse = await authService.signUp(data)
        const response = await fetch('/api/session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: signUpResponse }),
        })

        if (response.ok) {
            router.push(homePageDefinition.path)
        }
    }

    return (
        <form onSubmit={handleSubmit(handleSignUp)}>
            <CardContent className='flex flex-col gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input {...register('email')} id='email' type='email' placeholder='Email' autoFocus />
                <Label htmlFor='password'>Senha</Label>
                <Input {...register('password')} id='password' type='password' placeholder='Senha' />
                <Label htmlFor='password'>Confirmar senha</Label>
                <Input {...register('confirm_password')} id='confirm-password' type='password' placeholder='Confirmar senha' />
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
                <Button type='submit'>Submit</Button>
            </CardFooter>
        </form>
    )
}
