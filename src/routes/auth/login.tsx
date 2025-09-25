"use client"

import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { Flame, Eye, EyeOff, Mail, Lock, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,

})

function RouteComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, watch, formState: { isSubmitting } } = useForm<{ username: string; password: string }>({
    defaultValues: { username: '', password: '' }
  })

  const isRun = useRef(false)
  useEffect(() => {
    if (!isRun.current) {
      document.title = 'Login | RitualPlanner'
    }
  }, [])

  const onSubmit = async (data: { username: string; password: string }) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    // Handle login logic here
    console.log('Login attempt:', data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Home</span>
      </Link>

      <div className="w-full max-w-md relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Flame className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your RitualPlanner account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="username"
                  {...register('username', { required: true })}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white transition-colors"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  {...register('password', { required: true })}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg pl-10 pr-12 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-600 bg-white border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <Link to="/auth/forgot-password"><Button
                type="button"
                className="cursor-pointer shadow-none bg-transparent text-sm text-orange-600 hover:bg-transparent transition-colors"
              >
                Forgot password?
              </Button></Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !watch('username') || !watch('password')}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/auth/register"
                className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>By signing in, you agree to our{' '}
            <Link to="/legal/ToS" className="text-orange-600 hover:text-orange-700 transition-colors">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link to="/legal/privacy" className="text-orange-600 hover:text-orange-700 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
