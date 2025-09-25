import { z } from 'zod'

export const loginFormSchema = z.object({
    username: z
        .string()
        .trim()
        .min(1, 'Username is required'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters')
})

export type TLoginFormData = z.infer<typeof loginFormSchema>

export type TLoginResponse = {
    accessToken: string
    refreshToken: string
}

export type TOnboardResponse = {
    isOnboarded: string
}

export type TAuthResponse = TLoginResponse | TOnboardResponse