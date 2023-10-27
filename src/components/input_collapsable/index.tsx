import React from 'react'
import { Animated, TextInputProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/icon'
import { useTheme } from '@contexts'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

export interface Props extends TextInputProps {
  icon: JSX.Element
  handleExpanded: (expanded: boolean) => void
  isExpanded: boolean
}

export default function CollapsableInput(props: Props): JSX.Element {
  const { icon, handleExpanded, isExpanded, ...rest } = {
    ...props,
  }
  const { theme } = useTheme()
  const { animatedScale, handlePressIn, handlePressOut } = useShrinkAnimation()

  const translateX = React.useRef(new Animated.Value(800)).current

  const handlePress = (): void => {
    Animated.timing(translateX, {
      duration: 300,
      toValue: isExpanded ? 800 : 0,
      useNativeDriver: true,
    }).start()

    if (isExpanded) {
      setTimeout(() => {
        handleExpanded(false)
      }, 300)
    } else {
      handleExpanded(true)
    }
  }

  return (
    <Styled.Container isExpanded={isExpanded}>
      <Styled.Input
        style={{ transform: [{ translateX }] }}
        selectionColor={theme.palette.foreground.variant}
        cursorColor={theme.palette.foreground.variant}
        placeholderTextColor={theme.palette.foreground.shade30}
        {...rest}
      />

      <Styled.ActionButtonContainer
        style={{ transform: [{ scale: animatedScale }] }}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Icon
          width={theme.size.size5}
          height={theme.size.size5}
          icon={icon}
          color={theme.palette.foreground.variant}
        />
      </Styled.ActionButtonContainer>
    </Styled.Container>
  )
}
