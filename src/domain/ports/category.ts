import { CategoryCreateDTO } from "../dtos/category/request/create";
import { CategoryListResponseDTO } from "../dtos/category/response/list";
import { GenericPersistPort } from "./generic-persist";

export interface CategoryPort extends GenericPersistPort<CategoryCreateDTO> {
    list(userId: string): Promise<CategoryListResponseDTO[]>
    read(categoryId: string, userId: string): Promise<CategoryListResponseDTO>
    update(categoryId: string, userId: string, category: CategoryCreateDTO): Promise<void>
}
