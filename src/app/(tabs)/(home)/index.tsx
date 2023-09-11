import React from 'react'
import { Animated, Easing } from 'react-native'

import Button from '@components/button'
import Header from '@components/header'
import { IconCompass, IconGrid, IconList, IconShelf } from '@components/icon'
import ListView from '@components/list_view'
import MasonryView from '@components/masonry_view'
import NavSelector from '@components/nav_selector'
import Global from '@styles'

const data = [
  {
    id: 0,
    image: require('../../../assets/temp/santorini.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Santorini',
    publisher: 'Galapagos Jogos',
    information: [
      { data: '2 - 5', label: 'players', key: 'meeple' },
      { data: '10', label: 'years old', key: 'age' },
      { data: '5', label: 'expansions', key: 'meeple' },
      { data: '5', label: 'setup', key: 'setup' },
      { data: '40', label: 'matches', key: 'time' },
      { data: '5', label: 'downtime', key: 'downtime' },
    ],
    tags: ['Dificil', 'Estrategia', 'Civilizacao', 'Familia', 'Divertido', 'Demorado'],
    description:
      'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how theyve placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the players score. The player with the most points at the end of the game wins.',
  },
  {
    id: 1,
    image: require('../../../assets/temp/montmartre.png'),
    cover: require('../../../assets/temp/azul_cover.png'),
    foreground: require('../../../assets/temp/ticket_foreground.png'),
    title: 'Azul',
    publisher: 'Galapagos Jogos',
    information: [
      { data: '2 - 5', label: 'players', key: 'meeple' },
      { data: '10', label: 'years old', key: 'age' },
      { data: '5', label: 'expansions', key: 'meeple' },
      { data: '5', label: 'setup', key: 'setup' },
      { data: '40', label: 'matches', key: 'time' },
      { data: '5', label: 'downtime', key: 'downtime' },
    ],
    tags: ['Dificil', 'Estrategia', 'Civilizacao', 'Familia', 'Divertido', 'Demorado'],
    description:
      'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how theyve placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the players score. The player with the most points at the end of the game wins.',
  },
  {
    id: 2,
    image: require('../../../assets/temp/takenoko.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Takenoko',
    publisher: 'Galapagos Jogos',
    information: [
      { data: '2 - 5', label: 'players', key: 'meeple' },
      { data: '10', label: 'years old', key: 'age' },
      { data: '5', label: 'expansions', key: 'meeple' },
      { data: '5', label: 'setup', key: 'setup' },
      { data: '40', label: 'matches', key: 'time' },
      { data: '5', label: 'downtime', key: 'downtime' },
    ],
    tags: ['Dificil', 'Estrategia', 'Civilizacao', 'Familia', 'Divertido', 'Demorado'],
    description:
      'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how theyve placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the players score. The player with the most points at the end of the game wins.',
  },
  {
    id: 3,
    image: require('../../../assets/temp/ticket.png'),
    cover: require('../../../assets/temp/ticket.png'),
    foreground: require('../../../assets/temp/ticket_foreground.png'),
    title: 'Ticket to Ride',
    publisher: 'Galapagos Jogos',
    information: [
      { data: '2 - 5', label: 'players', key: 'meeple' },
      { data: '10', label: 'years old', key: 'age' },
      { data: '5', label: 'expansions', key: 'meeple' },
      { data: '5', label: 'setup', key: 'setup' },
      { data: '40', label: 'matches', key: 'time' },
      { data: '5', label: 'downtime', key: 'downtime' },
    ],
    tags: ['Dificil', 'Estrategia', 'Civilizacao', 'Familia', 'Divertido', 'Demorado'],
    description:
      'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how theyve placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the players score. The player with the most points at the end of the game wins.',
  },
  {
    id: 4,
    image: require('../../../assets/temp/carcassone.png'),
    cover: require('../../../assets/temp/list_cover.png'),
    foreground: require('../../../assets/temp/list_foreground.png'),
    title: 'Carcassone',
    publisher: 'Galapagos Jogos',
    information: [
      { data: '2 - 5', label: 'players', key: 'meeple' },
      { data: '10', label: 'years old', key: 'age' },
      { data: '5', label: 'expansions', key: 'meeple' },
      { data: '5', label: 'setup', key: 'setup' },
      { data: '40', label: 'matches', key: 'time' },
      { data: '5', label: 'downtime', key: 'downtime' },
    ],
    tags: ['Dificil', 'Estrategia', 'Civilizacao', 'Familia', 'Divertido', 'Demorado'],
    description:
      'In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how theyve placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the players score. The player with the most points at the end of the game wins.',
  },
]

const Home = (): JSX.Element => {
  const [view, setView] = React.useState('masonry')

  const transformValue = React.useRef(new Animated.Value(0)).current
  const opacityValue = React.useRef(new Animated.Value(0)).current

  const firstRenderAnimation = React.useCallback(() => {
    Animated.timing(transformValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()

    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }, [transformValue, opacityValue])

  React.useEffect(() => {
    firstRenderAnimation()
  }, [firstRenderAnimation])

  function handleOnPressView(): void {
    opacityValue.resetAnimation()
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()

    setView((prev) => (prev === 'masonry' ? 'list' : 'masonry'))
  }

  return (
    <Global.Screen edges={['top', 'left', 'right']}>
      <Header.Root>
        <Header.TextContent>
          <Header.Title>Hey Guilherme!</Header.Title>
          <Header.Description>Explore top rated games by category</Header.Description>
        </Header.TextContent>
        <Button
          color="background"
          variant="filled"
          icon={view === 'masonry' ? <IconGrid /> : <IconList />}
          onPress={handleOnPressView}
        />
      </Header.Root>

      <Animated.View
        style={{
          opacity: opacityValue,
          transform: [
            {
              translateY: transformValue.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        }}
      >
        {view === 'masonry' ? <MasonryView data={data} /> : <ListView data={data} />}
      </Animated.View>
      <NavSelector
        leading={{ label: 'shelf', icon: <IconShelf /> }}
        trailing={{ label: 'discover', icon: <IconCompass /> }}
        onPress={(): void => undefined}
        defaultSelected="discover"
      />
    </Global.Screen>
  )
}

export default Home
