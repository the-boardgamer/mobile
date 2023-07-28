import { Text, View } from 'react-native'

import { useAuth } from '@/contexts'

const Profile = (): JSX.Element => {
  const { signOut } = useAuth()
  return (
    <View>
      <Text>Profile</Text>
      <Text onPress={(): void => signOut()}>SignOut</Text>
    </View>
  )
}

export default Profile
