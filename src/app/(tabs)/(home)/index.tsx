import { IconStar } from '@components/icon'
import ListItem from '@components/list_item'
import Tag from '@components/tag'
import * as Global from '@styles/global'

const Home = (): JSX.Element => (
  <Global.Screen>
    <Tag label="Estrategia" />
    <ListItem
      title="Takenoko"
      publisher="Galapagos Jogos"
      icon={<IconStar />}
      coverImage={require('../../../assets/temp/list_cover.png')}
      foregroundImage={require('../../../assets/temp/list_foreground.png')}
    />
  </Global.Screen>
)

export default Home
