import React from 'react'
import { CategoryFormSchema } from '../form-schema'
import { getCategory, updateCategory } from './actions'
import CategoryFormCard from '../form.card'

export default async function EditCategoryFormPage({ params: { id: categoryId } }: { params: { id: string } }) {
    const category = await getCategory(categoryId)

    const handleAction = async (categoryData: CategoryFormSchema) => {
        'use server'
        return await updateCategory(categoryData, categoryId)
    }

    return <CategoryFormCard category={category} action={handleAction} />
}
