import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { Tabs } from 'expo-router'

import * as Styled from './styles'
import Tab from '@components/nav_bar/tab'
import { useTheme } from '@contexts'

interface Props {
  tabs: {
    label: string
    icon: JSX.Element
  }[]
  padding?: number
  iconSize?: number
  letterSize?: number
  tabPadding?: number
}

const defaultValues = {
  padding: 28,
  iconSize: 24,
  letterSize: 10,
  tabPadding: 20,
}

const NavBar = (props: Props): JSX.Element => {
  const { theme } = useTheme()
  const { padding, tabs, letterSize, iconSize, tabPadding } = { ...defaultValues, ...props }

  const getWidth = (Dimensions.get('window').width - 2 * padding) / tabs.length

  const initialSize = tabPadding * 2 + iconSize + tabs[0].label.length * letterSize
  const sizeOffsetValue = React.useRef(new Animated.Value(1)).current
  const tabOffsetValue = React.useRef(new Animated.Value(padding)).current

  const screenOptions = {
    tabBarHideOnKeyboard: true,
    headerShown: true,
    headerTransparent: false,

    tabBarStyle: {
      paddingHorizontal: parseInt(theme.size.size7, 10),
      paddingVertical: parseInt(theme.size.size7, 10),
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      height: parseInt(theme.size.size26, 10),
    },
  }

  return (
    <Styled.Container>
      <Tabs screenOptions={screenOptions}>
        {tabs.map((tab, index) => {
          const middle = padding + getWidth * index
          const size =
            1 +
            (tabPadding * 2 + iconSize + tab.label.length * letterSize - initialSize) / initialSize

          const tabPress = (): void => {
            Animated.spring(sizeOffsetValue, {
              toValue: size,
              useNativeDriver: true,
            }).start()
            Animated.spring(tabOffsetValue, {
              toValue: middle,
              useNativeDriver: true,
            }).start()
          }

          const tabBarButton = (tabProps): JSX.Element => (
            <Tab
              label={tab.label}
              icon={tab.icon}
              {...tabProps}
            />
          )

          return (
            <Tabs.Screen
              key={tab.label}
              name={`(${tab.label})/index`}
              options={{ tabBarButton }}
              listeners={{ tabPress }}
            />
          )
        })}
      </Tabs>

      <Styled.Selector style={{ width: getWidth, transform: [{ translateX: tabOffsetValue }] }}>
        <Styled.Background
          style={{ width: initialSize, transform: [{ scaleX: sizeOffsetValue }] }}
        />
      </Styled.Selector>
    </Styled.Container>
  )
}

export default NavBar
