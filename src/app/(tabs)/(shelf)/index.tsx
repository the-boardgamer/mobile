import { FlatList, ScrollView, View } from 'react-native'

import GridItem from '@components/grid_item'
import ListItem from '@components/list_item'

const data = [
  {
    name: 'Takenoko',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/takenoko.png'),
    foregroundImage: require('../../../assets/temp/list_foreground.png'),
  },
  {
    name: 'Carcassone',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/carcassone.png'),
    foregroundImage: require('../../../assets/temp/carcassone_foreground.png'),
  },
  {
    name: 'Ticket to Ride',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/ticket.png'),
    foregroundImage: require('../../../assets/temp/ticket_foreground.png'),
  },
  {
    name: 'Santorini',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/santorini.png'),
    foregroundImage: require('../../../assets/temp/santorini_foreground.png'),
  },
  {
    name: 'Ticket to Ride',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/ticket.png'),
    foregroundImage: require('../../../assets/temp/ticket_foreground.png'),
  },
  {
    name: 'Takenoko',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/takenoko.png'),
    foregroundImage: require('../../../assets/temp/list_foreground.png'),
  },
  {
    name: 'Carcassone',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/carcassone.png'),
    foregroundImage: require('../../../assets/temp/carcassone_foreground.png'),
  },
  {
    name: 'Ticket to Ride',
    publisher: 'Galapagos Jogos',
    // publisherIcon:
    coverImage: require('../../../assets/temp/ticket.png'),
    foregroundImage: require('../../../assets/temp/ticket_foreground.png'),
  },
]

const Shelf = (): JSX.Element => {
  const halfIndex = Math.ceil(data.length / 2)
  const firstHalf = data.slice(0, halfIndex)
  const secondHalf = data.slice(halfIndex)

  return (
    <View>
      {/* <ListItem
        title="Takenoko"
        publisher="Galapagos Jogos"
        coverImage={require('../../../assets/temp/list_cover.png')}
        foregroundImage={require('../../../assets/temp/list_foreground.png')}
      /> */}
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 10 }}>
          {firstHalf.map((cover, i) => (
            <GridItem
              key={`${cover}-${i}`}
              image={cover.coverImage}
            />
          ))}
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          {secondHalf.reverse().map((cover, i) => (
            <GridItem
              key={`${cover}-${i}`}
              image={cover.coverImage}
            />
          ))}
        </View>
        {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
        style={{ width: 400 }}
      /> */}
      </View>
    </View>
  )
}

export default Shelf
