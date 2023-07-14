import { Slot } from 'expo-router'

import { AuthProvider } from '../src/utils'

export default function Root(): JSX.Element {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
}
