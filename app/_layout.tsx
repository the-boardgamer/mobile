import { Stack } from 'expo-router'
import Providers from 'utils'

const Root = (): JSX.Element => (
  <Providers>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(tabs)"
        options={{}}
      />
    </Stack>
  </Providers>
)

export default Root
