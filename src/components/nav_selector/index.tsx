import React from 'react'
import { Animated, GestureResponderEvent, PressableProps } from 'react-native'

import * as Styled from './styles'
import TabSelector from './tab_selector'

export interface Props extends PressableProps {
  leading: { label: string; icon: JSX.Element }
  trailing: { label: string; icon: JSX.Element }
  defaultSelected?: 'leading' | 'trailing'
}
const defaultValues: Partial<Props> = {
  defaultSelected: 'leading',
}

const NavSelector = (props: Props): JSX.Element => {
  const { leading, trailing, defaultSelected, onPress } = { ...defaultValues, ...props }

  const [selected, setSelected] = React.useState<Props['defaultSelected']>(defaultSelected)
  const [widths, setWidths] = React.useState({ leading: 1, trailing: 1 })

  const labelOffsetValue = React.useRef(new Animated.Value(0)).current

  React.useEffect(() => {
    Animated.spring(labelOffsetValue, {
      toValue: selected === 'leading' ? 0 : widths.leading,
      useNativeDriver: true,
    }).start()
  }, [selected, labelOffsetValue, widths])

  const handlePress = (event: GestureResponderEvent): void => {
    setSelected((value) => {
      if (value === 'leading') return 'trailing'
      return 'leading'
    })
    onPress?.(event)
  }

  return (
    <Styled.Container onPress={handlePress}>
      <TabSelector
        onLayout={(e): void => {
          setWidths((value) => ({ ...value, leading: e?.nativeEvent?.layout.width }))
        }}
        selected={selected === 'leading'}
        label={leading.label}
        icon={leading.icon}
      />
      <TabSelector
        onLayout={(e): void => {
          setWidths((value) => ({ ...value, trailing: e?.nativeEvent?.layout.width }))
        }}
        selected={selected === 'trailing'}
        label={trailing.label}
        icon={trailing.icon}
      />
      <Styled.Selector
        style={{
          width: selected === 'leading' ? widths.leading : widths.trailing,
          transform: [{ translateX: labelOffsetValue }],
        }}
      >
        <Styled.Background />
      </Styled.Selector>
    </Styled.Container>
  )
}
export default NavSelector
