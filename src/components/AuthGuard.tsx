import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useLogin } from '@/store/useLogin'

interface AuthGuardProps {
    children: React.ReactNode
    requireAuth?: boolean
}

export function AuthGuard({ children, requireAuth = false }: AuthGuardProps) {
    const navigate = useNavigate()
    const { isLoggedIn, checkAuthStatus } = useLogin()

    useEffect(() => {
        const checkAuth = async () => {
            await checkAuthStatus()
        }

        checkAuth()
    }, [checkAuthStatus])

    useEffect(() => {
        if (requireAuth && !isLoggedIn) {
            // User needs to be logged in but isn't - redirect to login
            navigate({ to: '/auth/login' })
        } else if (!requireAuth && isLoggedIn) {
            // User is logged in but on public pages - redirect to dashboard
            navigate({ to: '/app/dashboard' })
        }
    }, [isLoggedIn, requireAuth, navigate])

    // Show loading state while checking authentication
    if (requireAuth && !isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
            </div>
        )
    }

    return <>{children}</>
}
