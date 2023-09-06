import React from 'react'
import { Animated } from 'react-native'

import * as Styled from './styles'
import { useTheme } from '@contexts'
import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs'

export interface Props extends BottomTabBarButtonProps {
  label: string
  icon: JSX.Element
  getWidth: (width: number) => void
}

const Tab = (props: Props): JSX.Element => {
  const { label, icon, accessibilityState, getWidth, ...rest } = props
  delete rest.style
  delete rest.onLayout

  const { theme } = useTheme()
  const offsetValue = React.useRef(new Animated.Value(100)).current
  const selected: boolean = accessibilityState.selected

  React.useEffect(() => {
    if (selected)
      Animated.spring(offsetValue, {
        toValue: 0,
        useNativeDriver: true,
      }).start()
  }, [selected, offsetValue])

  const layout = React.useCallback(
    (e): void => {
      getWidth(e?.nativeEvent?.layout.width)
    },
    [getWidth],
  )

  return (
    <Styled.Container>
      <Styled.Tab
        onLayout={layout}
        {...rest}
      >
        {!selected &&
          React.cloneElement(icon, {
            width: 20,
            height: 20,
            color: selected ? theme.palette.primary.inverse : theme.palette.primary.default,
            filled: selected,
            style: { position: 'absolute' },
          })}

        {React.cloneElement(icon, {
          width: 20,
          height: 20,
          color: selected ? theme.palette.primary.inverse : 'transparent',
          filled: selected,
        })}

        <Styled.Label
          numberOfLines={1}
          selected={selected}
          style={{ transform: [{ translateX: offsetValue }] }}
        >
          {label}
        </Styled.Label>
      </Styled.Tab>
    </Styled.Container>
  )
}

Tab.displayName = 'Tab'

export default Tab
