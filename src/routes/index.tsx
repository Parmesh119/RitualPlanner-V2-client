import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef } from 'react'

import Header from '@/components/HomePage/header'
import About from '@/components/HomePage/about'
import Contact from '@/components/HomePage/contact'
import FAQ from '@/components/HomePage/faq'
import Footer from '@/components/HomePage/footer'
import Hero from '@/components/HomePage/hero'
import { AuthGuard } from '@/components/AuthGuard'

export const Route = createFileRoute('/')({
  component: App
})

function App() {

  const isRun = useRef(false)

  useEffect(() => {
    if (!isRun.current) {
      document.title = "RitualPlanner | A Smart Task & Ritual Management Software for Priests"
      isRun.current = true
    }
  }, [])

  return (
    <AuthGuard requireAuth={false}>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </AuthGuard>
  )
}
