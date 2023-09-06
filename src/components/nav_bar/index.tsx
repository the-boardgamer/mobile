import React from 'react'
import { Animated, Dimensions, Platform } from 'react-native'
import { Tabs } from 'expo-router'

import * as Styled from './styles'
import Tab from './tab_bar'
import { useTheme } from '@contexts'

interface Props {
  tabs: {
    [key: string]: { label: string; icon: JSX.Element }
  }
}

const NavBar = (props: Props): JSX.Element => {
  const { tabs } = props
  const { theme } = useTheme()

  const screenWidth = Dimensions.get('window').width - parseInt(theme.size.size7, 10) * 2

  const [selectorWidth, setSelectorWidth] = React.useState({})
  const [selected, setSelected] = React.useState(Object.keys(tabs)[0])

  const labelOffsetValue = React.useRef(new Animated.Value(parseInt(theme.size.size7, 10))).current

  const screenOptions = {
    tabBarHideOnKeyboard: true,
    headerShown: false,

    tabBarStyle: {
      elevation: 0,
      paddingHorizontal: parseInt(theme.size.size7, 10),
      paddingBottom: parseInt(Platform.OS === 'android' ? '0px' : theme.size.size2, 10),
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      height: parseInt(Platform.OS === 'android' ? theme.size.size16 : theme.size.size20, 10),
      zIndex: 2,
    },
  }

  const springAnimation = (index): void => {
    Animated.spring(labelOffsetValue, {
      toValue: parseInt(theme.size.size7, 10) + index * (screenWidth / Object.keys(tabs).length),
      useNativeDriver: true,
    }).start()
  }

  const tabBarButton = (tabProps, label, icon): JSX.Element => (
    <Tab
      getWidth={(e): void => setSelectorWidth({ ...selectorWidth, [label]: e })}
      label={label}
      icon={icon}
      {...tabProps}
    />
  )

  const renderTabs = (): JSX.Element[] =>
    Object.values(tabs).map((tab, index) => (
      <Tabs.Screen
        key={tab.label}
        name={`(${tab.label})/index`}
        options={{
          tabBarButton: (e) => tabBarButton(e, tab.label, tab.icon),
        }}
        listeners={{
          tabPress: (): void => {
            setSelected(tab.label)
            springAnimation(index)
          },
        }}
      />
    ))

  return (
    <Styled.Container>
      <Tabs screenOptions={screenOptions}>{renderTabs()}</Tabs>
      <Styled.Selector
        style={{
          width: screenWidth / Object.keys(tabs).length,
          transform: [{ translateX: labelOffsetValue }],
        }}
      >
        <Styled.Background style={{ width: selectorWidth[`${selected}`] }} />
      </Styled.Selector>
    </Styled.Container>
  )
}

export default NavBar
