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
})

type AuthSignInFormData = z.infer<typeof authSignInFormSchema>

export default function AuthSignInFormComponent() {
    const router = useRouter()

    const { register, handleSubmit } = useForm<AuthSignInFormData>({
        mode: 'onSubmit',
        resolver: zodResolver(authSignInFormSchema),
    })

    const handleSignIn = async (data: AuthSignInFormData) => {
        const signInResponse = await authService.signIn(data)
        console.log('signInResponse', signInResponse)
        router.push('/home')
    }

    return (
        <form onSubmit={handleSubmit(handleSignIn)}>
            <label htmlFor="email">Email</label>
            <input {...register('email')} id="email" type="email" placeholder='Email'/>
            <label htmlFor="password">Password</label>
            <input {...register('password')}id="password" type="password" placeholder='Senha'/>
            <button type="submit">Submit</button>
        </form>
    )
}
