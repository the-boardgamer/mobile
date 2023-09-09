/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router } from 'expo-router'

import * as Styled from './styles'
import Button from '@components/button'
import Header from '@components/header'
import { IconArrow, IconCompass, IconStar } from '@components/icon'
import IconInformation from '@components/icon_information'
import Tag from '@components/tag'
import { useTheme } from '@contexts'
import Global from '@styles'

const iconMapping = {
  IconArrow,
  IconCompass,
  IconStar,
}

export default function GameDetails(): JSX.Element {
  const [filled, setFilled] = React.useState(false)
  const [height, setHeight] = React.useState(0)
  const insets = useSafeAreaInsets()

  const data = [
    { data: '1-5', label: 'players', icon: 'IconStar' },
    { data: '10', label: 'years old', icon: 'IconStar' },
    { data: '5', label: 'downtime', icon: 'IconStar' },
    { data: '8', label: 'downtime', icon: 'IconStar' },
    { data: '11', label: 'downtime', icon: 'IconStar' },
  ]

  const { theme } = useTheme()

  return (
    <Global.Screen edges={['left', 'right']}>
      <ScrollView>
        <Styled.StartContainer>
          <Header.Root
            style={{
              zIndex: 1,
              top: 20,
              //   backgroundColor: 'yellow',
              //   position: 'absolute',
            }}
            onLayout={(event): void => {
              console.log(event.nativeEvent.layout.height)
              setHeight(event.nativeEvent.layout.height)
            }}
          >
            {/* <View
            onLayout={(event): void => {
              setHeight(event.nativeEvent.layout.height)
            }}
            style={{ zIndex: 10, backgroundColor: 'red' }}
          > */}
            <Button
              color="background"
              icon={<IconArrow />}
              onPress={(): void => router.back()}
              animation={false}
              style={
                {
                  // position: 'absolute',
                  // top: insets.top,
                  // left: 20,
                }
              }
            />
            <Button
              color="background"
              icon={<IconStar filled={filled} />}
              onPress={(): void => setFilled((prev) => !prev)}
              style={
                {
                  // position: 'absolute',
                  // top: insets.top,
                  // right: 20,
                }
              }
            />
            {/* </View> */}
          </Header.Root>
          <Image
            style={{
              height: 300,
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
              backgroundColor: 'green',
            }}
            source={require('../../assets/temp/list_cover.png')}
            blurRadius={4}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              top: height - 20,
              //   backgroundColor: 'red',
              width: '100%',
            }}
          >
            <Image
              source={require('../../assets/temp/azul_foreground.png')}
              // not sure about changing image width here
              style={{ resizeMode: 'contain', height: 100 }}
            />
          </View>
        </Styled.StartContainer>
        <View>
          <ScrollView
            horizontal
            style={{ paddingLeft: 20, paddingTop: 10 }}
          >
            <Tag label="estrategia" />
            <Tag label="sorte" />
            <Tag label="civilizacao" />
            <Tag label="longo" />
            <Tag label="facil" />
            <Tag label="divertido" />
          </ScrollView>

          <FlatList
            data={data}
            numColumns={2}
            style={{ margin: 20 }}
            scrollEnabled={false}
            renderItem={({ item }): JSX.Element => {
              const IconComponent = iconMapping[item.icon]

              return (
                <IconInformation
                  label={item.label}
                  data={item.data}
                  icon={<IconStar />}
                  onPress={() => {}}
                  style={{ marginBottom: 10 }}
                />
              )
            }}
          />

          <View style={{ margin: 20 }}>
            <Text
              style={{ fontWeight: 'bold', fontSize: 20, color: theme.palette.foreground.default }}
            >
              Description
            </Text>
            <Text
              style={{
                color: theme.palette.foreground.default,
                fontSize: 16,
                marginTop: 10,
                letterSpacing: 2,
              }}
            >
              In the game Azul, players take turns drafting colored tiles from suppliers to their
              player board. Later in the round, players score points based on how theyve placed
              their tiles to decorate the palace. Extra points are scored for specific patterns and
              completing sets; wasted supplies harm the players score. The player with the most
              points at the end of the game wins.
            </Text>
          </View>
        </View>
      </ScrollView>
    </Global.Screen>
  )
}
