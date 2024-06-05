import { CategoryCreateDTO } from "@/domain/dtos/category/request/create";
import { CategoryListResponseDTO } from "@/domain/dtos/category/response/list";
import { CategoryPort } from "@/domain/ports/category";

export class CategoryService implements CategoryPort {

    constructor(private adapter: CategoryPort) { }

    public async create(categoryCreateDTO: CategoryCreateDTO): Promise<void> {
        return this.adapter.create(categoryCreateDTO)
    }

    public async list(): Promise<CategoryListResponseDTO[]> {
        return await this.adapter.list()
    }
}