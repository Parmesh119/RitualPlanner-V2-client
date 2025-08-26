import { createFileRoute } from '@tanstack/react-router'

import Header from '@/components/HomePage/header'
import About from '@/components/HomePage/about'
import Contact from '@/components/HomePage/contact'
import FAQ from '@/components/HomePage/faq'
import Footer from '@/components/HomePage/footer'
import Hero from '@/components/HomePage/hero'

export const Route = createFileRoute('/')({
  component: App
})

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </>
  )
}
