import React from 'react'

export interface UserInterface {
  id: number
}

export interface AuthContextInterface {
  signIn: () => void
  signOut: () => void
  user: UserInterface | null
}

export const AuthContext = React.createContext<AuthContextInterface | null>(null)
