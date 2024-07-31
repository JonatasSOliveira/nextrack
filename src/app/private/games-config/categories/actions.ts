'use server'
import { CategoryFirebaseAdapter } from '@/adapters/firebase/category'
import { CategoryService } from '@/application/services/category'
import { getSession } from '@/lib/auth'

export async function getCategories() {
    const session = await getSession()
    const categoryService = new CategoryService(new CategoryFirebaseAdapter())
    return await categoryService.list(session.id)
}

export async function deleteCategory(categoryId: string) {
    const session = await getSession()
    const categoryService = new CategoryService(new CategoryFirebaseAdapter())
    await categoryService.logicalDelete(categoryId, session.id)
}
