import { Text, View } from 'react-native'

import { useAuth } from '../../../src/utils'

export default function SignIn(): JSX.Element {
  const { signIn } = useAuth()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={(): void => signIn()}>Sign In</Text>
    </View>
  )
}
