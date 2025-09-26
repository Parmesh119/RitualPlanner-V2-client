"use client"

import { createFileRoute, Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { Mail, ArrowLeft, Flame } from 'lucide-react'

export const Route = createFileRoute('/auth/forgot-password')({
  component: RouteComponent,
})

function RouteComponent() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const isRun = useRef(false)
  useEffect(() => {
    if (!isRun.current) {
      document.title = 'Reset Password | RitualPlanner Account'
      isRun.current = true
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-20" />

      {/* Back to Login */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Home</span>
      </Link>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Flame className="w-8 h-8 text-white" />
            </div>
          </div>
          {/* Heading outside card */}
          <h1 className="text-2xl font-bold text-foreground mb-2">Forgot Password</h1>
          <p className="text-sm text-muted-foreground">Please enter the email you used to create your account. An OTP will be sent to this email.</p>
        </div>
        <div className="bg-card/80 dark:bg-gray-900/60 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-xl">

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-900 dark:text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white dark:focus:bg-gray-900 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? 'Sending OTP…' : 'Send OTP'}
            </button>
          </form>
          {/* Back to Login (centered) */}
          <div className="mt-6 text-center">
            <Link
              to="/auth/login"
              className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
