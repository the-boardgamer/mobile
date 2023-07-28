import { Stack } from 'expo-router'

import { AuthProvider, ThemeProvider } from '@contexts'

const RootLayout = (): JSX.Element | null => (
  <ThemeProvider>
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  </ThemeProvider>
)

export default RootLayout
