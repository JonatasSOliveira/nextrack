import { CategoryCreateDTO } from '@/domain/dtos/category/request/create'
import { CategoryListResponseDTO } from '@/domain/dtos/category/response/list'
import { CategoryPort } from '@/domain/ports/category'
import { CategoryFirebaseRepository } from './repositories/category'

export class CategoryFirebaseAdapter implements CategoryPort {
    private categoryRepository = new CategoryFirebaseRepository()

    public async create(category: CategoryCreateDTO): Promise<void> {
        await this.categoryRepository.create(category)
    }

    public async list(): Promise<CategoryListResponseDTO[]> {
        return await this.categoryRepository.list()
    }

}