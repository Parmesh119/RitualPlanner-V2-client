import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useLogin } from '@/store/useLogin'
import { authService } from '@/lib/auth'
import { useRegister } from '@/store/useRegister'

interface AuthGuardProps {
    children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
    const navigate = useNavigate()
    const { isLoggedIn, checkAuthStatus, isOnboarded } = useLogin()
    const { isRegistered } = useRegister()

    useEffect(() => {
        const checkAuth = async () => {
            await checkAuthStatus()
        }

        if (isOnboarded) {
            checkAuth()
        }
    }, [isOnboarded, checkAuthStatus])

    useEffect(() => {
        const checkAuth = async () => {
            const checkLogin = await authService.isLoggedIn()
            if (!isLoggedIn && !checkLogin) {
                navigate({ to: '/auth/login' })
            } else if (!checkLogin && !isRegistered) {
                navigate({ to: "/auth/register" })
            } else if (!isOnboarded && isLoggedIn) {
                navigate({ to: "/app/onboard/$id", params: { id: "1" } })
            } else if (checkLogin) {
                navigate({ to: '/app/dashboard' })
            } else {
                navigate({ to: "/auth/login" })

            }
        }

        checkAuth()
    }, [isLoggedIn, navigate])

    return <>{children}</>
}
