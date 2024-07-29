'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { categoryFormSchema, CategoryFormSchema } from './form-schema'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CategoryListResponseDTO } from '@/domain/dtos/category/response/list'
import { useRouter } from 'next/navigation'

export interface CategoryFormComponentProps {
    category?: CategoryListResponseDTO
    action: (categoryData: CategoryFormSchema) => Promise<void>
}

export default function CategoryFormComponent({ category, action }: CategoryFormComponentProps) {
    const router = useRouter()

    const { register, handleSubmit } = useForm<CategoryFormSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(categoryFormSchema),
        defaultValues: category
    })

    const goBack = () => router.back()

    const formAction: () => void = handleSubmit(async (data: CategoryFormSchema) => {
        await action(data)
        goBack()
    });

    return (
        <form action={formAction}>
            <CardContent>
                <Label htmlFor="name">Nome</Label>
                <Input  {...register('name')} type="text" id="name" autoFocus />
            </CardContent>
            <CardFooter className='flex flex-row gap-2 justify-around'>
                <Button type='button' onClick={goBack} variant='secondary'>Voltar</Button>
                <Button type='submit'>{category ? 'Atualizar' : 'Cadastrar'}</Button>
            </CardFooter>
        </form>
    )
}
