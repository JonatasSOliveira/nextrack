'use client'

import { CategoryFirebaseAdapter } from '@/adapters/firebase/category'
import { CategoryService } from '@/application/services/category'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const categoryService = new CategoryService(new CategoryFirebaseAdapter())

const categoryFormSchema = z.object({
    name: z.string()
})

type CategoryFormSchema = z.infer<typeof categoryFormSchema>

export default function CategoryFormComponent() {
    const { register, handleSubmit } = useForm<CategoryFormSchema>({
        mode: 'onSubmit',
        resolver: zodResolver(categoryFormSchema),
    })

    const handleCreateCategory = async (data: CategoryFormSchema) => {
        await categoryService.create(data)
    }

    return (
        <form onSubmit={handleSubmit(handleCreateCategory)}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" {...register('name')} />
            <button type="submit">Submit</button>
        </form>
    )
}
