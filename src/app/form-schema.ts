import { z } from 'zod'

export const authSignInFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})

export type AuthSignInFormData = z.infer<typeof authSignInFormSchema>
