import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useLogin } from '@/store/useLogin'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { authService } from '@/lib/auth'

export const Route = createFileRoute('/app/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { logout, isLoggedIn, isOnboarded } = useLogin()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate({ to: '/' })
  }

  useEffect(() => {
    const checkLogin = async () => {
      const checkLogin = await authService.isLoggedIn()

      if(!checkLogin) {
        navigate({ to: "/auth/login"})
      }
    }

    checkLogin()
  }, [navigate])

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Authentication Status</h2>
            <p className="text-muted-foreground">
              <strong>Logged In:</strong> {isLoggedIn ? 'Yes' : 'No'}
            </p>
            <p className="text-muted-foreground">
              <strong>Onboarded:</strong> {isOnboarded ? 'Yes' : 'No'}
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                View Profile
              </Button>
              <Button className="w-full" variant="outline">
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
