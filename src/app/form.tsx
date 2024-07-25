'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import { homePageDefinition } from './private/home/page-definition'
import { AuthSignInFormData, authSignInFormSchema } from './form-schema'
import { signIn } from './actions'


export default function AuthSignInFormComponent() {
    const router = useRouter()

    const { register, handleSubmit } = useForm<AuthSignInFormData>({
        mode: 'onSubmit',
        resolver: zodResolver(authSignInFormSchema),
    })

    const formAction: () => void = handleSubmit(async (data: AuthSignInFormData) => {
        await signIn(data);
        router.push(homePageDefinition.path)
    });

    return (
        <form action={formAction}>
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
