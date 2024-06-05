import { CategoryCreateDTO } from '@/domain/dtos/category/request/create'
import { GenericFirebaseRepository } from './generic'
import { CategoryListResponseDTO } from '@/domain/dtos/category/response/list'

export class CategoryFirebaseRepository extends GenericFirebaseRepository<CategoryCreateDTO, CategoryListResponseDTO> {

    constructor() {
        super('categories')
    }

}
