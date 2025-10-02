import { create } from 'zustand'
import { authService } from '@/lib/auth'

type AuthState = {
    isLoggedIn: boolean
    isOnboarded: boolean
    setLoggedIn: (status: boolean) => void
    setOnboarded: (status: boolean) => void
    logout: () => void
}

export const useLogin = create<AuthState>((set) => ({
    isLoggedIn: false,
    isOnboarded: false,

    setLoggedIn: (status: boolean) => {
        set({ isLoggedIn: status })
    },

    setOnboarded: (status: boolean) => {
        set({ isOnboarded: status })
    },

    logout: () => {
        authService.clearTokens()
        set({ isLoggedIn: false })
    }
}))