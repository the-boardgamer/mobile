import { Text, View } from 'react-native'

import Button from '@components/button'
import { IconHome, IconStar } from '@components/icons'

const Matches = (): JSX.Element => (
  <View>
    <Text>Matches</Text>
    <Button
      variant="filled"
      color="primary"
      label="Button to Test"
      icon={
        <IconHome
          filled
          color="red"
        />
      }
    />
    <IconStar
      color="red"
      width={32}
      height={32}
    />
  </View>
)

export default Matches
