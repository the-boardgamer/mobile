/* eslint-disable react-native/no-inline-styles */
import { ScrollView, View } from 'react-native'

import Button from '@components/button'
import GridItem from '@components/grid_item'
import Header from '@components/header'
import { IconStar } from '@components/icon'
import Global from '@styles'

const covers = [
  require('../../../assets/temp/santorini.png'),
  require('../../../assets/temp/montmartre.png'),
  require('../../../assets/temp/takenoko.png'),
  require('../../../assets/temp/ticket.png'),
  require('../../../assets/temp/carcassone.png'),
]

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

    <ScrollView>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 1, padding: 10 }}>
          {covers.map((cover, i) => (
            <GridItem
              key={`${cover}-${i}`}
              image={cover}
            />
          ))}
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          {covers.reverse().map((cover, i) => (
            <GridItem
              key={`${cover}-${i}`}
              image={cover}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  </Global.Screen>
)

export default Home
