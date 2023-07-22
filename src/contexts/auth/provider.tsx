import React from 'react'
import { router, useSegments } from 'expo-router'

import { AuthContext, type AuthContextType, type UserInterface } from './context'

type AuthProviderType = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderType): JSX.Element => {
  const [user, setUser] = React.useState<UserInterface | null>(null)

  const segments = useSegments()

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      setImmediate(() => {
        router.replace('/(auth)/sign-in/')
      })
    } else if (user && inAuthGroup) {
      setImmediate(() => {
        router.replace('/')
      })
    }
  }, [user, segments])

  const value: AuthContextType = {
    signIn: () => {
      setUser({ id: 20 })
    },
    signOut: () => {
      setUser(null)
    },
    user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
