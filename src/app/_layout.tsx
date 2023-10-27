import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'

import { AuthProvider, ThemeProvider } from '@contexts'

const RootLayout = (): JSX.Element | null => {
  const [loadedFonts] = useFonts({
    'Quicksand-Light': require('@assets/fonts/quicksand/Quicksand-Light.ttf'),
    'Quicksand-Regular': require('@assets/fonts/quicksand/Quicksand-Regular.ttf'),
    'Quicksand-Medium': require('@assets/fonts/quicksand/Quicksand-Medium.ttf'),
    'Quicksand-SemiBold': require('@assets/fonts/quicksand/Quicksand-SemiBold.ttf'),
    'Quicksand-Bold': require('@assets/fonts/quicksand/Quicksand-Bold.ttf'),
  })

  if (loadedFonts) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider>
          <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
            </Stack>
          </AuthProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    )
  }
}

export default RootLayout
