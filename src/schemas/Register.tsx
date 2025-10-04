import { z } from 'zod'

export const registerFormSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(2, 'First name must be at least 2 characters')
        .regex(/^[a-zA-Z\s]+$/, { message: 'Name must contain only letters and spaces' }),
    lastName: z
        .string()
        .trim()
        .min(2, 'Last name must be at least 2 characters')
        .regex(/^[a-zA-Z\s]+$/, { message: 'Name must contain only letters and spaces' }),
    phone: z
        .string()
        .trim()
        .regex(/^[6-9]\d{9}$/i, 'Enter a valid 10-digit number starting with 6, 7, 8, or 9'),
    email: z
        .string()
        .trim()
        .email('Please enter a valid email address'),
})

export type TRegisterFormData = z.infer<typeof registerFormSchema>
