import { createFileRoute, Outlet } from '@tanstack/react-router'
import { AuthGuard } from '@/components/AuthGuard'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <AuthGuard requireAuth={true}>
      <Outlet />
    </AuthGuard>
  )
}
