import { showToastError, showToastInfo } from '@/components/ToastContainer'
import { authService } from '@/lib/auth'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/app/onboard/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const isRun = useRef(false)

  useEffect(() => {
    const checkLogin = async () => {
      const checkLogin = await authService.getOnboardToken()
      const isOnboarded = await authService.getOnboardToken()

      if (!checkLogin && !isOnboarded) {
        showToastError("Unauthorized Access!", "Please Login to continue...")
        navigate({ to: "/auth/login" })
      } else if(!isOnboarded && checkLogin) {
        showToastInfo("You are already loggedIn!")
        navigate({ to: "/app/dashboard"})
      }

    }
    if (isRun.current) return;
    checkLogin()
    isRun.current = true
  }, [navigate])

  return <div>Hello "/auth/onboard/$id"!</div>
}
