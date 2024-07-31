export interface GenericPersistPort<CreateRequestDTO, ListResponseDTO> {
    create: (createDTO: CreateRequestDTO) => Promise<void>
    list: (userId: string) => Promise<ListResponseDTO[]>
    read: (id: string, userId: string) => Promise<ListResponseDTO>
    logicalDelete(id: string, userId: string): Promise<void>
}
