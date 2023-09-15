import { Text } from 'react-native'

import Button from '@components/button'
import { useAuth, useTheme } from '@contexts'
import * as Global from '@styles/global'

const Profile = (): JSX.Element => {
  const { signOut } = useAuth()

  const { mode, setMode } = useTheme()

  return (
    <Global.Screen>
      <Text>Profile</Text>
      <Text onPress={(): void => signOut()}>SignOut</Text>

      <Button
        label={mode}
        onPress={(): void => setMode(mode === 'light' ? 'dark' : 'light')}
      />
    </Global.Screen>
  )
}

export default Profile
