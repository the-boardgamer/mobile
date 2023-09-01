import { Text } from 'react-native'

import Button from '@components/button'
import { IconHome, IconStar } from '@components/icon'
import Input from '@components/input'
import * as Global from '@styles/global'

const Matches = (): JSX.Element => (
  <Global.Screen>
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
  </Global.Screen>
)

export default Matches
