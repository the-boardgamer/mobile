import { Text, View } from 'react-native'

import Button from '@components/button'
import { IconHome, IconStar } from '@components/icons'
import Input from '@components/input'

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
    <Input
      placeholder="Search"
      onChange={(value): void => console.log(value)}
    />
  </View>
)

export default Matches
