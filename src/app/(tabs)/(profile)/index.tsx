import { Text, View } from 'react-native'

import { useAuth, useTheme } from '@contexts'

const Profile = (): JSX.Element => {
  const { signOut } = useAuth()
  const { theme } = useTheme()
  return (
    <View style={{ backgroundColor: theme.palette.background.default, flex: 1 }}>
      <Text>Profile</Text>
      <Text onPress={(): void => signOut()}>SignOut</Text>
    </View>
  )
}

export default Profile
