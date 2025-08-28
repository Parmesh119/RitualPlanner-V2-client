import TermsPage from '@/components/legal/Terms_Of_Service'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/ToS')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TermsPage />
}
