/* eslint-disable react-native/no-inline-styles */
import { ScrollView, View } from 'react-native'

import GridItem from '@components/grid_item'
import ListItem from '@components/list_item'

const covers = [
  require('../../../assets/temp/santorini.png'),
  require('../../../assets/temp/montmartre.png'),
  require('../../../assets/temp/takenoko.png'),
  require('../../../assets/temp/ticket.png'),
  require('../../../assets/temp/carcassone.png'),
]

const Home = (): JSX.Element => (
  <ScrollView>
    <ListItem
      title="Takenoko"
      publisher="Galapagos Jogos"
      coverImage={require('../../../assets/temp/list_cover.png')}
      foregroundImage={require('../../../assets/temp/list_foreground.png')}
    />
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
)

export default Home
