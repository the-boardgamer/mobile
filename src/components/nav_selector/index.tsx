import React from 'react'
import { Animated, GestureResponderEvent, PressableProps } from 'react-native'

import * as Styled from './styles'
import TabSelector from './tab_selector'

export interface Props extends Omit<PressableProps, 'onPress'> {
  leading: { label: string; icon: JSX.Element }
  trailing: { label: string; icon: JSX.Element }
  defaultSelected?: string
  onPress?: (e: GestureResponderEvent, value: string) => void
}

const NavSelector = (props: Props): JSX.Element => {
  const { leading, trailing, defaultSelected, onPress } = props

  const [selected, setSelected] = React.useState(defaultSelected ?? leading.label)

  const [leadingWidth, setLeadingWidth] = React.useState(1)
  const [trailingWidth, setTrailingWidth] = React.useState(1)

  const labelOffsetValue = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.spring(labelOffsetValue, {
      toValue: selected === leading.label ? 0 : leadingWidth,
      useNativeDriver: true,
    }).start()
  }, [selected, labelOffsetValue, leading, leadingWidth])

  const handlePress = (event: GestureResponderEvent): void => {
    setSelected((value) => {
      const newValue = value === leading.label ? trailing.label : leading.label
      onPress(event, newValue)
      return newValue
    })
  }

  return (
    <Styled.Container onPress={handlePress}>
      <TabSelector
        getWidth={(width): void => setLeadingWidth(width)}
        selected={selected === leading.label}
        label={leading.label}
        icon={leading.icon}
      />
      <TabSelector
        getWidth={(width): void => setTrailingWidth(width)}
        selected={selected === trailing.label}
        label={trailing.label}
        icon={trailing.icon}
      />
      <Styled.Selector
        style={{
          width: selected === leading.label ? leadingWidth : trailingWidth,
          transform: [{ translateX: labelOffsetValue }],
        }}
      >
        <Styled.Background />
      </Styled.Selector>
    </Styled.Container>
  )
}
export default NavSelector
