import React from 'react'
import { Animated, Easing } from 'react-native'

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
    title: 'Ticket to Ride - bug',
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

  const transformValue = React.useRef(new Animated.Value(0)).current
  const opacityValue = React.useRef(new Animated.Value(0)).current

  const firstRenderAnimation = React.useCallback(() => {
    Animated.timing(transformValue, {
      toValue: 1,
      duration: 800,
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
      duration: 800,
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
          icon={<IconSearch />}
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
    </Global.Screen>
  )
}

export default Home
