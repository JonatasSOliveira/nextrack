"use client"

import { FirebaseAuthAdapter } from '@/adapters/firebase/auth'
import { AuthService } from '@/application/services/auth'
import { Button, buttonVariants } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
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
            <CardContent className='flex flex-col gap-2'>
                <Label htmlFor="email">Email</Label>
                <Input {...register('email')} id="email" type="email" placeholder='Email' autoFocus />
                <Label htmlFor="password">Senha</Label>
                <Input {...register('password')} id="password" type="password" placeholder='Senha' />
            </CardContent>
            <CardFooter className='flex flex-col gap-2'>
                <Button>Acessar</Button>
                <Link href='/sign-up' className={buttonVariants({ variant: "link" })}>Novo? Cadastre-se</Link>
            </CardFooter>
        </form>
    )
}
