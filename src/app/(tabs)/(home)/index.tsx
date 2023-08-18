import { View } from 'react-native'

import { IconStar } from '@components/icon'
import ListItem from '@components/list_item'
import Tag from '@components/tag'

const Home = (): JSX.Element => (
  <View style={{ flex: 1 }}>
    <Tag label="Estrategia" />
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
