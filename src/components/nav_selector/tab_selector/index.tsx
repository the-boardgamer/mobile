import React from 'react'
import { Animated, ViewProps } from 'react-native'

import * as Styled from './styles'
import { useTheme } from '@contexts'

export interface Props extends ViewProps {
  label: string
  icon: JSX.Element
  selected: boolean
  getWidth?: (width: number) => void
}

const TabSelector = (props: Props): JSX.Element => {
  const { label, icon, selected, getWidth, ...rest } = props
  const { theme } = useTheme()
  const offsetValue = React.useRef(new Animated.Value(100)).current

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
      onLayout={(e): void => {
        getWidth(e?.nativeEvent?.layout.width)
      }}
      {...rest}
    >
      {!selected &&
        React.cloneElement(icon, {
          width: 18,
          height: 18,
          color: selected ? theme.palette.primary.inverse : theme.palette.primary.default,
          filled: selected,
          style: { position: 'absolute' },
        })}

      {React.cloneElement(icon, {
        width: 18,
        height: 18,
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
    </Styled.Container>
  )
}

export default TabSelector
