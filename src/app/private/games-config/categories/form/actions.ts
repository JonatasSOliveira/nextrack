'use server'
import { CategoryFirebaseAdapter } from '@/adapters/firebase/category'
import { CategoryService } from '@/application/services/category'
import { CategoryFormSchema } from './form-schema'
import { getSession } from '@/lib/auth'

export async function createCategory(categoryData: CategoryFormSchema) {
    const session = await getSession()
    const categoryService = new CategoryService(new CategoryFirebaseAdapter())
    await categoryService.create({ ...categoryData, user_id: session.id })
}