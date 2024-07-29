import { z } from 'zod'

export const categoryFormSchema = z.object({
    name: z.string()
})

export type CategoryFormSchema = z.infer<typeof categoryFormSchema>
