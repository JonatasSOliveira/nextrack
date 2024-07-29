'use server'
import { CategoryFirebaseAdapter } from '@/adapters/firebase/category'
import { CategoryService } from '@/application/services/category'
import { getSession } from '@/lib/auth'

export async function listCategories() {
    const session = await getSession()
    const categoryService = new CategoryService(new CategoryFirebaseAdapter())
    return await categoryService.list(session.id)
}