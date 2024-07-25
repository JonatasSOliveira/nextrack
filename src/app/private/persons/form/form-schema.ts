import { z } from 'zod'

export const personFormSchema = z.object({
    name: z.string()
})

export type PersonFormSchema = z.infer<typeof personFormSchema>
