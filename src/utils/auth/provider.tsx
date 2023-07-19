import React from 'react'
import { useRouter, useSegments } from 'expo-router'

import { AuthContext, AuthContextType, type UserInterface } from './context'

function useProtectedRoute(user: UserInterface | null): void {
  const segments = useSegments()
  const router = useRouter()

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup) {
      router.replace('/sign-in')
    } else if (user && inAuthGroup) {
      router.replace('/home')
    }
  }, [user, segments, router])
}

export const AuthProvider = (props: { children: React.ReactNode }): JSX.Element => {
  const [user, setAuth] = React.useState<UserInterface | null>(null)

  useProtectedRoute(user)

  const value: AuthContextType = {
    signIn: () => setAuth({ id: 20 }),
    signOut: () => setAuth(null),
    user,
  }

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}
