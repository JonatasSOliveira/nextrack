import { CategoryCreateDTO } from '@/domain/dtos/category/request/create'
import { CategoryListResponseDTO } from '@/domain/dtos/category/response/list'
import { CategoryPort } from '@/domain/ports/category'
import { CategoryFirebaseRepository } from './repositories/category'
import { GenericFirebaseAdapter } from './generic'

export class CategoryFirebaseAdapter extends GenericFirebaseAdapter<CategoryCreateDTO, CategoryListResponseDTO> implements CategoryPort {

    constructor() {
        super(new CategoryFirebaseRepository())
    }

    public async update(categoryId: string, userId: string, category: CategoryCreateDTO): Promise<void> {
        return this.repository.update(categoryId, userId, category)
    }
}