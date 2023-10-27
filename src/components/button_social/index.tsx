import React from 'react'
import { Animated, Easing, PressableProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/icon'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

export interface Props extends PressableProps {
  action?: boolean
  animation?: boolean
  background: string
  foreground: string
  expanded?: boolean
  icon?: JSX.Element
  label?: string
}

const defaultValues: Props = {
  action: false,
  animation: true,
  background: undefined,
  foreground: undefined,
  expanded: false,
}

export default function ButtonSocial(props: Props): JSX.Element {
  const { action, background, foreground, expanded, label, icon, animation, ...rest } = {
    ...defaultValues,
    ...props,
  }

  const { animatedScale, handlePressIn, handlePressOut } = useShrinkAnimation()

  const iconOpacityValue = React.useRef(new Animated.Value(0)).current

  const animate = animation && icon

  React.useEffect(() => {
    iconOpacityValue.resetAnimation()
    Animated.timing(iconOpacityValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start()
  }, [animate, iconOpacityValue])

  return (
    <Animated.View
      style={{
        transform: [{ scale: animatedScale }],
      }}
    >
      <Styled.Button
        background={background}
        foreground={foreground}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        action={action}
        expanded={expanded}
        {...rest}
      >
        {icon && (
          <Animated.View
            style={{
              opacity: iconOpacityValue,
            }}
          >
            <Icon
              icon={icon}
              color={foreground}
              {...icon.props}
            />
          </Animated.View>
        )}

        {label && (
          <Styled.Label
            background={background}
            foreground={foreground}
            action={action}
            expanded={expanded}
            numberOfLines={1}
          >
            {label}
          </Styled.Label>
        )}
      </Styled.Button>
    </Animated.View>
  )
}
