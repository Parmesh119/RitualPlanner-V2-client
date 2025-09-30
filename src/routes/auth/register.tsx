"use client"

import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Flame, Mail, User, Phone, ArrowLeft } from 'lucide-react'
import { registerFormSchema, type TRegisterFormData } from '@/schemas/Register'
import { toast } from 'sonner'
import useRegisterHook from '@/hooks/useRegister'
import { useRegister } from '@/store/useRegister'
import { useNavigate } from "@tanstack/react-router"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,

})

function RouteComponent() {

  const isRun = useRef(false)
  const navigate = useNavigate()
  const { registerMutation } = useRegisterHook()
  const { isRegistered, setIsRegistered } = useRegister()
  const [showRegisteredDialog, setShowRegisteredDialog] = useState(false)

  useEffect(() => {
    if (!isRun.current) {
      document.title = "Register | RitualPlanner"
      isRun.current = true
    }
  }, [])
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<TRegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    },
    mode: "onChange"
  })

  const firstName = watch('firstName') || ''
  const lastName = watch('lastName') || ''
  const phone = watch('phone') || ''
  const email = watch('email') || ''
  const isFormFilled =
    firstName.trim().length > 0 &&
    lastName.trim().length > 0 &&
    phone.trim().length > 0 &&
    email.trim().length > 0

  const onSubmit = async (data: TRegisterFormData) => {
    if (!agreedToTerms) {
      toast.error('Please agree to the Terms of Service and Privacy Policy')
      return
    }

    registerMutation.mutate(data)
    reset()
  }

  useEffect(() => {
    if (isRegistered) {
      setShowRegisteredDialog(true)
    }
  }, [isRegistered])

  const handleConfirmRegistration = () => {
    setShowRegisteredDialog(false)
    setIsRegistered(false)
    navigate({ to: '/auth/login' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-950 dark:to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 dark:opacity-20" />

      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors z-10"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="hidden sm:inline">Back to Home</span>
      </Link>

      <div className="w-full max-w-xl relative z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Flame className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join RitualPlanner and start managing your rituals</p>
        </div>

        {/* Signup Form */}
        <div className="bg-card/80 dark:bg-gray-900/60 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* First Name Field */}
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName')}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-900 dark:text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white dark:focus:bg-gray-900 transition-colors"
                    placeholder="First name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-sm text-red-600">{errors.firstName.message}</p>
                )}
              </div>

              {/* Last Name Field */}
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName')}
                    className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-900 dark:text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white dark:focus:bg-gray-900 transition-colors"
                    placeholder="Last name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-sm text-red-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-900 dark:text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white dark:focus:bg-gray-900 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-4 py-3 text-gray-900 dark:text-foreground placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:bg-white dark:focus:bg-gray-900 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password Field removed as per request */}

            {/* Terms Agreement */}
            <div className="space-y-3">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 text-orange-600 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 rounded focus:ring-orange-500 focus:ring-2 mt-1"
                />
                <span className="ml-3 text-sm text-foreground">
                  I agree to the{' '}
                  <Link
                    to="/legal/ToS"
                    className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
                  >
                    Terms of Service
                  </Link>
                  {' '}and{' '}
                  <Link
                    to="/legal/privacy"
                    className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !agreedToTerms || !isFormFilled}
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:transform-none disabled:cursor-not-allowed shadow-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating account...
                </div>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link
                to="/auth/login"
                className="text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 font-medium transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Registration Success Dialog */}
      <AlertDialog open={showRegisteredDialog} onOpenChange={(open) => {
        // Prevent external attempts to close; only allow our OK button
        if (open) setShowRegisteredDialog(true)
      }}>
        <AlertDialogContent
          // @ts-expect-error: Prevent closing on outside click (prop not in type)
          onInteractOutside={(e: Event) => e.preventDefault()}
          onEscapeKeyDown={(e: KeyboardEvent) => e.preventDefault()}
          className="bg-background text-foreground sm:max-w-xl rounded-2xl p-8 gap-6"
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-semibold tracking-tight">
              Account created
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base leading-7 text-muted-foreground">
              Your account has been created successfully. We’ve sent your login
              credentials to the email address you used during registration.
              <br />
              <br />
              Please use those credentials to sign in and get started.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction className="px-6 py-2.5 text-base" onClick={handleConfirmRegistration}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
