import PrivacyPage from '@/components/legal/Privacy_Policy'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/legal/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <PrivacyPage />
}
