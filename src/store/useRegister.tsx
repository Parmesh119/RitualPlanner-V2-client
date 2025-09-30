import { create } from "zustand";

type RegisterState = {
    isRegistered: boolean,
    setIsRegistered: (status: boolean) => void
} 

export const useRegister = create<RegisterState>((set) => ({
    isRegistered: false,

    setIsRegistered: (status: boolean) => {
        set({ isRegistered: status })
    },
}))