import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useUser } from '@/contexts/UserContext'
import api from '@/services/api'

function validateEmailFormat(email: string): string | null {
  if (!email) return null
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!re.test(email)) return 'Please enter a valid email address'
  return null
}

function validatePasswordStrength(password: string): string | null {
  if (!password) return null
  if (password.length < 8) return 'Password must be at least 8 characters'
  if (!/[A-Z]/.test(password)) return 'Password must contain an uppercase letter'
  if (!/[0-9]/.test(password)) return 'Password must contain a number'
  return null
}

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<{ email: string | null; password: string | null; server: string | null }>({
    email: null,
    password: null,
    server: null,
  })
  const [emailTaken, setEmailTaken] = useState(false)
  const emailCheckTimer = useRef<ReturnType<typeof setTimeout>>()
  const { register } = useUser()
  const navigate = useNavigate()

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setFieldErrors(prev => ({ ...prev, server: null, email: null }))
    setEmailTaken(false)

    const formatError = validateEmailFormat(value)
    if (formatError) {
      setFieldErrors(prev => ({ ...prev, email: formatError }))
      return
    }

    if (emailCheckTimer.current) clearTimeout(emailCheckTimer.current)
    emailCheckTimer.current = setTimeout(async () => {
      if (!value) return
      try {
        const data = await api.auth.checkEmail(value)
        if (data.exists) {
          setFieldErrors(prev => ({ ...prev, email: 'This email is already registered' }))
          setEmailTaken(true)
        }
      } catch {
        // silently fail; form submit will catch server errors
      }
    }, 400)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    setFieldErrors(prev => ({ ...prev, server: null }))

    const strengthError = validatePasswordStrength(value)
    setFieldErrors(prev => ({ ...prev, password: strengthError }))
  }

  const handleEmailBlur = async () => {
    if (!email || fieldErrors.email) return
    try {
      const data = await api.auth.checkEmail(email)
      if (data.exists) {
        setFieldErrors(prev => ({ ...prev, email: 'This email is already registered' }))
        setEmailTaken(true)
      }
    } catch {
      // silently fail
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFieldErrors(prev => ({ ...prev, server: null }))

    const emailErr = validateEmailFormat(email)
    const passwordErr = validatePasswordStrength(password)

    if (emailErr || passwordErr || emailTaken) {
      setFieldErrors(prev => ({
        email: emailErr || (emailTaken ? 'This email is already registered' : null),
        password: passwordErr,
        server: null,
      }))
      return
    }

    setIsLoading(true)
    const result = await register(email, password, name)
    setIsLoading(false)

    if (result.success) {
      navigate('/')
    } else {
      const msg = result.error
      if (msg === 'Email already registered') {
        setFieldErrors(prev => ({ ...prev, email: msg }))
        setEmailTaken(true)
      } else if (msg && msg.startsWith('Password')) {
        setFieldErrors(prev => ({ ...prev, password: msg }))
      } else {
        setFieldErrors(prev => ({ ...prev, server: msg || 'Registration failed. Please try again.' }))
      }
    }
  }

  const hasErrors = fieldErrors.email || fieldErrors.password || emailTaken

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-text-primary">Create Account</h1>
          <p className="mt-2 text-text-secondary">Join SkillPath today</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6" noValidate>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-lg border border-border bg-background-secondary px-4 py-2 text-text-primary placeholder:text-text-muted focus:border-accent-indigo focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                className={`mt-1 block w-full rounded-lg border px-4 py-2 text-text-primary placeholder:text-text-muted focus:outline-none bg-background-secondary ${
                  fieldErrors.email ? 'border-red-500' : 'border-border focus:border-accent-indigo'
                }`}
                placeholder="you@example.com"
              />
              {fieldErrors.email && (
                <p className="text-sm text-red-500 mt-1">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
                className={`mt-1 block w-full rounded-lg border px-4 py-2 text-text-primary placeholder:text-text-muted focus:outline-none bg-background-secondary ${
                  fieldErrors.password ? 'border-red-500' : 'border-border focus:border-accent-indigo'
                }`}
                placeholder="••••••••"
              />
              {fieldErrors.password && (
                <p className="text-sm text-red-500 mt-1">{fieldErrors.password}</p>
              )}
            </div>
          </div>

          {fieldErrors.server && (
            <p className="text-sm text-red-500">{fieldErrors.server}</p>
          )}

          <Button
            type="submit"
            disabled={isLoading || !!hasErrors}
            className="w-full"
          >
            {isLoading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <p className="text-center text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-accent-indigo hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
