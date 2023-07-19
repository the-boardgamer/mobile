import { Text, View } from 'react-native'

import { useAuth } from '../../../src/utils'

const Profile = (): JSX.Element => {
  const { signOut } = useAuth()
  return (
    <View>
      <Text>Profile</Text>

      <Text onPress={(): void => signOut()}>Sign Out</Text>
    </View>
  )
}

export default Profile
