import PrivacyPage from '@/components/legal/Privacy_Policy'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/legal/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  const isRun = useRef(false)
  useEffect(() => {
    if (!isRun.current) {
      document.title = 'Privacy Policy | RitualPlanner',
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn how RitualPlanner collects, uses, and protects your information. Read our Privacy Policy for details about data practices and your rights.')
    }
  }, [])
  
  return <PrivacyPage />
}
