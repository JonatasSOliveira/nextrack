import { CategoryCreateDTO } from "../dtos/category/request/create";
import { CategoryListResponseDTO } from "../dtos/category/response/list";
import { GenericPersistPort } from "./generic-persist";

export interface CategoryPort extends GenericPersistPort<CategoryCreateDTO> {
    list(): Promise<CategoryListResponseDTO[]>
}
