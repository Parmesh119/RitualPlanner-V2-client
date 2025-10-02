import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { authService } from '@/lib/auth'

interface AuthGuardProps {
    children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
    const navigate = useNavigate()
    
    useEffect(() => {
        const checkLogin = async () => {
            const checkLogin = await authService.isLoggedIn()
            const onboardToken = await authService.getOnboardToken()

            if(onboardToken && !checkLogin) {
                navigate({ to: "/app/onboard/$id", params: { id: "1" } })
            } else if(!onboardToken && checkLogin) {
                navigate({to: "/app/dashboard"})
            }
        }

        checkLogin()
    }, [navigate])

    return <>{children}</>
}
