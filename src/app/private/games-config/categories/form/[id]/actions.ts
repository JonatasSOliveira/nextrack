'use server'

import { CategoryService } from "@/application/services/category";
import { CategoryFormSchema } from "../form-schema";
import { CategoryFirebaseAdapter } from "@/adapters/firebase/category";
import { getSession } from "@/lib/auth";
import { CategoryListResponseDTO } from "@/domain/dtos/category/response/list";

export async function getCategory(categoryId: string): Promise<CategoryListResponseDTO> {
    const session = await getSession()
    const categoryService = new CategoryService(new CategoryFirebaseAdapter())
    return await categoryService.read(categoryId, session.id)
}

export async function updateCategory(data: CategoryFormSchema, categoryId: string) {
    const session = await getSession()
    const categoryService = new CategoryService(new CategoryFirebaseAdapter())
    await categoryService.update(categoryId, session.id, { ...data, user_id: session.id })
}
