import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import api from '../services/api'

interface User {
  id: number
  email: string
  name: string
  isPremium: boolean
}

interface UserContextType {
  user: User | null
  isPremium: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  register: (email: string, password: string, name: string) => Promise<boolean>
  logout: () => void
  upgrade: () => Promise<boolean>
  cancelPremium: () => Promise<boolean>
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isPremium, setIsPremium] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsLoading(false)
      return
    }

    try {
      const userData = await api.auth.me()
      setUser(userData)
      setIsPremium(userData.isPremium)
    } catch {
      localStorage.removeItem('token')
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const data = await api.auth.login(email, password)
      localStorage.setItem('token', data.token)
      setUser({ id: data.id, email: data.email, name: data.name, isPremium: data.isPremium })
      setIsPremium(data.isPremium)
      return true
    } catch {
      return false
    }
  }

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      const data = await api.auth.register(email, password, name)
      localStorage.setItem('token', data.token)
      setUser({ id: data.id, email: data.email, name: data.name, isPremium: false })
      return true
    } catch {
      return false
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsPremium(false)
  }

  const upgrade = async (): Promise<boolean> => {
    try {
      await api.auth.upgrade()
      setIsPremium(true)
      if (user) {
        setUser({ ...user, isPremium: true })
      }
      return true
    } catch {
      return false
    }
  }

  const cancelPremium = async (): Promise<boolean> => {
    try {
      const result = await api.auth.cancel()
      setIsPremium(false)
      if (user) {
        setUser({ ...user, isPremium: false })
      }
      return true
    } catch (error) {
      console.error('CancelPremium error:', error);
      return false
    }
  }

  return (
    <UserContext.Provider value={{ user, isPremium, isLoading, login, register, logout, upgrade, cancelPremium }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}