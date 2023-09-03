import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Button from '@components/button'
import GridItem from '@components/grid_item'
import Header from '@components/header'
import { IconCompass, IconShelf, IconStar } from '@components/icon'
import NavSelector from '@components/nav_selector'
import Global from '@styles'

const covers = [
  require('../../../assets/temp/santorini.png'),
  require('../../../assets/temp/montmartre.png'),
  require('../../../assets/temp/takenoko.png'),
  require('../../../assets/temp/ticket.png'),
  require('../../../assets/temp/carcassone.png'),
]

const Home = (): JSX.Element => (
  <Global.Screen edges={['top', 'left', 'right']}>
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

    <View style={{ flex: 1, flexDirection: 'row', gap: 20, marginHorizontal: 20 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={covers}
        ItemSeparatorComponent={(): JSX.Element => <View style={{ height: 20 }} />}
        renderItem={({ item, index }): JSX.Element => (
          <GridItem
            key={`${item}-${index}`}
            image={item}
          />
        )}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={(): JSX.Element => <View style={{ height: 20 }} />}
        data={[...covers].reverse()}
        renderItem={({ item, index }): JSX.Element => (
          <GridItem
            key={`${item}-${index}`}
            image={item}
          />
        )}
      />
    </View>
    <NavSelector
      defaultSelected={'trailing'}
      leading={{ label: 'shelf', icon: <IconShelf /> }}
      trailing={{ label: 'discover', icon: <IconCompass /> }}
    />
  </Global.Screen>
)

export default Home
