import { CategoryCreateDTO } from '@/domain/dtos/category/request/create'
import { CategoryListResponseDTO } from '@/domain/dtos/category/response/list'
import { CategoryPort } from '@/domain/ports/category'
import { CategoryFirebaseRepository } from './repositories/category'

export class CategoryFirebaseAdapter implements CategoryPort {
    private categoryRepository = new CategoryFirebaseRepository()

    public async create(category: CategoryCreateDTO): Promise<void> {
        await this.categoryRepository.create(category)
    }

    public async list(userId: string): Promise<CategoryListResponseDTO[]> {
        return await this.categoryRepository.list(userId)
    }

    public async read(categoryId: string, userId: string): Promise<CategoryListResponseDTO> {
        return await this.categoryRepository.read(categoryId, userId)
    }

    public async update(categoryId: string, userId: string, category: CategoryCreateDTO): Promise<void> {
        return this.categoryRepository.update(categoryId, userId, category)
    }
}