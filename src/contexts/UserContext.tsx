import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface User {
  id: number
  email: string
  name: string
  isPremium: boolean
}

interface UserContextType {
  user: User | null
  isPremium: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  upgrade: () => void
  togglePremium: () => void // For testing purposes
}

const defaultUser: User = {
  id: 1,
  email: 'demo@skillpath.com',
  name: 'Demo User',
  isPremium: false
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isPremium, setIsPremium] = useState(false)

  useEffect(() => {
    const storedPremium = localStorage.getItem('isPremium')
    if (storedPremium === 'true') {
      setIsPremium(true)
      setUser({ ...defaultUser, isPremium: true })
    }
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock login - accept any credentials
    if (email && password) {
      setUser({ ...defaultUser, email })
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    setIsPremium(false)
    localStorage.removeItem('isPremium')
  }

  const upgrade = () => {
    setIsPremium(true)
    localStorage.setItem('isPremium', 'true')
    if (user) {
      setUser({ ...user, isPremium: true })
    }
  }

  const togglePremium = () => {
    if (isPremium) {
      setIsPremium(false)
      localStorage.setItem('isPremium', 'false')
      if (user) {
        setUser({ ...user, isPremium: false })
      }
    } else {
      upgrade()
    }
  }

  return (
    <UserContext.Provider value={{ user, isPremium, login, logout, upgrade, togglePremium }}>
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