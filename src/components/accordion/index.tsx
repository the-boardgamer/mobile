import React from 'react'
import { Animated, ViewProps } from 'react-native'
import { Easing } from 'react-native'

import * as Styled from './styles'
import Button from '@components/button'
import { IconArrow } from '@components/icon'
import { useTheme } from '@contexts'

export interface Props extends ViewProps {
  content?: string
  label?: string
}

export default function Accordion(props: Props): JSX.Element {
  const { label, content, ...rest } = { ...props }
  const { theme } = useTheme()

  const [open, setOpen] = React.useState(false)
  const collapseValue = React.useRef(new Animated.Value(open ? 1 : 0)).current

  function handleOnPress(): void {
    setOpen((prev) => !prev)
    Animated.timing(collapseValue, {
      toValue: open ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }

  const interpolatedHeight = collapseValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['35%', '100%'],
  })

  const interpolatedRotation = collapseValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['270deg', '90deg'],
  })

  return (
    <Styled.DescriptionContainer {...rest}>
      <Styled.ContentContainer>
        <Styled.DescriptionTitle>{label}</Styled.DescriptionTitle>
        <Animated.View style={{ height: interpolatedHeight }}>
          <Styled.DescriptionContent>{content}</Styled.DescriptionContent>
        </Animated.View>
      </Styled.ContentContainer>
      <Button
        action
        animation={false}
        color="background"
        variant="filled"
        onPress={handleOnPress}
        icon={
          <Animated.View
            style={{
              transform: [
                {
                  rotate: interpolatedRotation,
                },
              ],
            }}
          >
            <IconArrow color={theme.palette.foreground.default} />
          </Animated.View>
        }
      />
    </Styled.DescriptionContainer>
  )
}
