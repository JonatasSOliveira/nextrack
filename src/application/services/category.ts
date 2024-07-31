import { CategoryCreateDTO } from "@/domain/dtos/category/request/create";
import { CategoryListResponseDTO } from "@/domain/dtos/category/response/list";
import { CategoryPort } from "@/domain/ports/category";
import { GenericService } from "./generic";

export class CategoryService extends GenericService<CategoryCreateDTO, CategoryListResponseDTO> implements CategoryPort {

    constructor(private categoryAdapter: CategoryPort) {
        super(categoryAdapter)
    }

    public async update(categoryId: string, userId: string, category: CategoryCreateDTO): Promise<void> {
        return await this.categoryAdapter.update(categoryId, userId, category)
    }
}