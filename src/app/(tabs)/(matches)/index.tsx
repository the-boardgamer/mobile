import { Text, View } from 'react-native'

import Button from '@components/button'
import { IconHome, IconStar } from '@components/icons'
import SegmentedControl from '@components/segmented_control'

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
    <SegmentedControl
      onChangeSegment={(label, i): void => console.log(label, i)}
      segments={['My Shelf', 'Discover']}
    />
  </View>
)

export default Matches
