import React from 'react'
import { Animated } from 'react-native'
import { useTheme } from 'styled-components/native'

import * as Styled from './styles'
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

export interface Props extends BottomTabBarButtonProps {
  label: string
  icon: JSX.Element
}

const Tab = (props: Props): JSX.Element => {
  const { label, icon, accessibilityState, onPress } = props
  const theme = useTheme()

  const offsetValue = React.useRef(new Animated.Value(100)).current
  const selected: boolean = accessibilityState.selected

  React.useEffect(() => {
    if (selected)
      Animated.spring(offsetValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
    else
      Animated.spring(offsetValue, {
        toValue: 100,
        useNativeDriver: true,
      }).start()
  }, [selected, offsetValue])

  return (
    <Styled.Container
      onPress={onPress}
      selected={selected}
    >
      <Styled.IconContainer>
        {React.cloneElement(icon, {
          width: 24,
          height: 24,
          color: selected ? theme.palette.primary.inverse : theme.palette.primary.default,
          filled: selected,
        })}
      </Styled.IconContainer>

      {selected && (
        <Styled.Label
          numberOfLines={1}
          selected={selected}
          style={{ transform: [{ translateX: offsetValue }] }}
        >
          {label}
        </Styled.Label>
      )}
    </Styled.Container>
  )
}

export default Tab
