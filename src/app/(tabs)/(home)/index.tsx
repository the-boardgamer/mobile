import React from 'react'

import Button from '@components/button'
import Header from '@components/header'
import { IconSearch } from '@components/icon'
import ListView from '@components/list_view'
import MasonryView from '@components/masonry_view'
import Global from '@styles'

const data = [
  {
    id: 0,
    image: require('../../../assets/temp/santorini.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Santorini',
    publisher: 'Galapagos Jogos',
  },
  {
    id: 1,
    image: require('../../../assets/temp/montmartre.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Montmartre',
    publisher: 'Galapagos Jogos',
  },
  {
    id: 2,
    image: require('../../../assets/temp/takenoko.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Takenoko',
    publisher: 'Galapagos Jogos',
  },
  {
    id: 3,
    image: require('../../../assets/temp/ticket.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Ticket to Ride -',
    publisher: 'Galapagos Jogos',
  },
  {
    id: 4,
    image: require('../../../assets/temp/carcassone.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Carcassone',
    publisher: 'Galapagos Jogos',
  },
]

const Home = (): JSX.Element => {
  const [view, setView] = React.useState('masonry')

  return (
    <Global.Screen edges={['top', 'left', 'right']}>
      <Header.Root>
        <Header.TextContent>
          <Header.Title>Hey Guilherme!</Header.Title>
          <Header.Description>Explore top rated games by category</Header.Description>
        </Header.TextContent>
        <Button
          color="background"
          icon={<IconSearch />}
          onPress={(): void => setView((prev) => (prev === 'masonry' ? 'list' : 'masonry'))}
        />
      </Header.Root>

      {view === 'masonry' ? <MasonryView data={data} /> : <ListView data={data} />}
    </Global.Screen>
  )
}

export default Home
