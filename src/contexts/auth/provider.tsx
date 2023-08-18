import React from 'react'
import { useFonts } from 'expo-font'
import { router, useSegments } from 'expo-router'

import { AuthContext, type AuthContextType, type UserInterface } from './context'

type AuthProviderType = {
  children: JSX.Element
}

export const AuthProvider = ({ children }: AuthProviderType): JSX.Element => {
  const [user, setUser] = React.useState<UserInterface | null>(null)

  const [loadedFonts] = useFonts({
    'Quicksand-Light': require('@assets/fonts/quicksand/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('@assets/fonts/quicksand/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('@assets/fonts/quicksand/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('@assets/fonts/quicksand/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('@assets/fonts/quicksand/Quicksand-Bold.ttf'),
  })

  const segments = useSegments()

  React.useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)'

    if (!user && !inAuthGroup && loadedFonts) {
      setImmediate(() => {
        router.replace('/(auth)/sign-in/')
      })
    } else if (user && inAuthGroup && loadedFonts) {
      setImmediate(() => {
        router.replace('/')
      })
    }
  }, [user, segments, loadedFonts])

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
