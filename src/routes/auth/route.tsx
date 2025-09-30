import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AuthGuard } from '@/components/AuthGuard'

export const Route = createFileRoute('/auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  )
}
