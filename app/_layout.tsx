import { Stack } from 'expo-router'

import { AuthProvider } from '../src/utils'

const Root = (): JSX.Element => (
  <AuthProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{}}
      />
    </Stack>
  </AuthProvider>
)

export default Root
