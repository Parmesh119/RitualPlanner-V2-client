import { Outlet, createRootRoute } from '@tanstack/react-router'
import { AuthGuard } from '@/components/AuthGuard'

export const Route = createRootRoute({
  component: () => (
    <AuthGuard>
      <Outlet />
    </AuthGuard>
  ),
})
