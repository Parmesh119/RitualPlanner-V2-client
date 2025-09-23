import TermsPage from '@/components/legal/Terms_Of_Service'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

export const Route = createFileRoute('/legal/ToS')({
  component: RouteComponent,
})

function RouteComponent() {
  const isRun = useRef(false)
  useEffect(() => {
    if(!isRun.current) {
      document.title = 'Terms of Service | RitualPlanner',
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'Read the Terms of Service for RitualPlanner. Understand your rights, responsibilities, and the rules that govern the use of our Services.')
    }
  }, [])
  
  return <TermsPage />
}
