import Button from '@components/button'
import Header from '@components/header'
import { IconStar } from '@components/icon'
import ListItem from '@components/list_item'
import Tag from '@components/tag'
import * as Global from '@styles/global'

const Home = (): JSX.Element => (
  <Global.Screen>
    <Header.Root>
      <Button
        color="background"
        icon={<IconStar />}
      />
      <Header.TextContent>
        <Header.Title>Hey Guilherme!</Header.Title>
        <Header.Description>Explore top rated games by category</Header.Description>
      </Header.TextContent>
    </Header.Root>

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
