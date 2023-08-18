import { Text, View } from 'react-native'

import { IconStar } from '@components/icons'
import ListItem from '@components/list_item'

const Home = (): JSX.Element => (
  <View>
    <Text>Home</Text>
    <ListItem
      title="Takenoko"
      publisher="Galapagos Jogos"
      icon={<IconStar />}
      coverImage={require('../../temp/list_cover.png')}
      foregroundImage={require('../../temp/list_foreground.png')}
    />
  </View>
)

export default Home
