export interface GenericPersistPort<CreateRequestDTO> {
    create: (createDTO: CreateRequestDTO) => Promise<void>
}
