import React from 'react'

export interface UserInterface {
  id: number
}

export interface AuthContextType {
  signIn: () => void
  signOut: () => void
  user: UserInterface | null
}

export const AuthContext = React.createContext<AuthContextType | null>(null)
AuthContext.displayName = 'AuthContext'
