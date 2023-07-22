import { Text, View } from 'react-native'
import Button from 'components/button'
import IconHome from 'components/icons/home'

const Matches = (): JSX.Element => (
  <View>
    <Text>Matches</Text>
    <Button
      variant="filled"
      color="primary"
      label="Button to Test"
      icon={<IconHome />}
    />
  </View>
)

export default Matches
