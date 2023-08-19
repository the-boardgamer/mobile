import { ScrollView, View } from 'react-native'

import GridItem from '@components/grid_item'
// import { IconStar } from '@components/icon'
// import ListItem from '@components/list_item'
// import Tag from '@components/tag'

const Home = (): JSX.Element => (
  <ScrollView>
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ flex: 1, padding: 10 }}>
        <GridItem image={require('../../../assets/temp/santorini.png')} />
        <GridItem image={require('../../../assets/temp/montmartre.png')} />
        <GridItem image={require('../../../assets/temp/takenoko.png')} />
        <GridItem image={require('../../../assets/temp/ticket.png')} />
        <GridItem image={require('../../../assets/temp/carcassone.png')} />
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <GridItem image={require('../../../assets/temp/carcassone.png')} />
        <GridItem image={require('../../../assets/temp/wonders.png')} />
        <GridItem image={require('../../../assets/temp/ticket.png')} />
        <GridItem image={require('../../../assets/temp/montmartre.png')} />
        <GridItem image={require('../../../assets/temp/takenoko.png')} />
      </View>
    </View>
    {/* <Tag label="Estrategia" />
    <ListItem
      title="Takenoko"
      publisher="Galapagos Jogos"
      icon={<IconStar />}
      coverImage={require('../../../assets/temp/list_cover.png')}
      foregroundImage={require('../../../assets/temp/list_foreground.png')}
    /> */}
  </ScrollView>
)

export default Home
