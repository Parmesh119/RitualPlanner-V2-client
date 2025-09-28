import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/onboard/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/onboard/$id"!</div>
}
