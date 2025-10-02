import { authService } from '@/lib/auth'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/app/onboard/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  useEffect(() => {
    const checkLogin = async () => {
      const checkLogin = await authService.getOnboardToken()

      if (!checkLogin) {
        navigate({ to: "/auth/login" })
      }
    }

    checkLogin()
  }, [navigate])

  return <div>Hello "/auth/onboard/$id"!</div>
}
