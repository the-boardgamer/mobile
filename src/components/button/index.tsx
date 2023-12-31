import React from 'react'
import { Animated, Easing, PressableProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/icon'
import { useTheme } from '@contexts'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

export interface Props extends PressableProps {
  action?: boolean
  animation?: boolean
  color?: 'primary' | 'secondary' | 'background' | 'foreground'
  expanded?: boolean
  icon?: JSX.Element
  label?: string
  variant?: 'filled' | 'shade' | 'outlined' | 'ghost'
}

const defaultValues: Props = {
  action: false,
  animation: true,
  color: 'primary',
  expanded: false,
  variant: 'filled',
}

export default function Button(props: Props): JSX.Element {
  const { action, color, expanded, label, icon, variant, animation, ...rest } = {
    ...defaultValues,
    ...props,
  }
  const { theme } = useTheme()

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

  const getIconColor =
    variant === 'filled' && color === 'background'
      ? theme.palette.foreground.default
      : variant === 'filled'
      ? theme.palette[color].inverse
      : theme.palette[color].default

  return (
    <Animated.View
      style={{
        transform: [{ scale: animatedScale }],
      }}
    >
      <Styled.Button
        color={color}
        variant={variant}
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
              color={getIconColor}
              {...icon.props}
            />
          </Animated.View>
        )}

        {label && (
          <Styled.Label
            color={color}
            variant={variant}
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
