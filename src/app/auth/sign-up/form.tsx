"use client"

import { FirebaseAuthAdapter } from '@/adapters/firebase/auth'
import { AuthService } from '@/application/services/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const authService = new AuthService(new FirebaseAuthAdapter())

const authSignInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
}).superRefine(({ confirm_password, password }, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
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
        console.log('signUpResponse', signUpResponse)
        router.push('/home')
    }

    return (
        <form onSubmit={handleSubmit(handleSignUp)}>
            <label htmlFor="email">Email</label>
            <input {...register('email')} id="email" type="email" placeholder='Email'/>
            <label htmlFor="password">Senha</label>
            <input {...register('password')}id="password" type="password" placeholder='Senha'/>
            <label htmlFor="password">Confirmar senha</label>
            <input {...register('confirm_password')}id="password" type="password" placeholder='Confirmar senha'/>
            <button type="submit">Submit</button>
        </form>
    )
}
