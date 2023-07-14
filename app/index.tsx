import { Text, View } from 'react-native'

import { useAuth } from '../src/utils'

export default function Index(): JSX.Element {
  const { signOut } = useAuth()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={(): void => signOut()}>Sign Out</Text>
    </View>
  )
}
