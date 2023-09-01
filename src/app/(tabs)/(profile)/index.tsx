import { Text } from 'react-native'

import { useAuth } from '@contexts'
import * as Global from '@styles/global'

const Profile = (): JSX.Element => {
  const { signOut } = useAuth()
  return (
    <Global.Screen>
      <Text>Profile</Text>
      <Text onPress={(): void => signOut()}>SignOut</Text>
    </Global.Screen>
  )
}

export default Profile
