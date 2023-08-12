import { Animated, PressableProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import * as Styled from './styles'
import Icons from '@components/icons'

export interface Props extends PressableProps {
  color?: 'primary' | 'secondary' | 'background'
  icon?: JSX.Element
  label?: string
  variant?: 'filled' | 'shade' | 'outlined' | 'ghost'
}

const defaultValues: Props = {
  color: 'primary',
  variant: 'filled',
}

export default function Button(props: Props): JSX.Element {
  const { color, label, icon, variant, ...rest } = { ...defaultValues, ...props }
  const theme = useTheme()

  const animated = new Animated.Value(1)

  const fadeIn = (): void => {
    Animated.timing(animated, {
      toValue: 0.7,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = (): void => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start()
  }

  const getIconColor = (): string => {
    if (variant === 'filled') return theme.palette[color].inverse
    return theme.palette[color].default
  }

  return (
    <Animated.View
      style={{
        opacity: animated,
      }}
    >
      <Styled.Button
        color={color}
        variant={variant}
        onPressIn={fadeIn}
        onPressOut={fadeOut}
        {...rest}
      >
        {icon && (
          <Icons
            icon={icon}
            color={getIconColor()}
            {...icon.props}
          />
        )}

        {label && (
          <Styled.Label
            color={color}
            variant={variant}
          >
            {label}
          </Styled.Label>
        )}
      </Styled.Button>
    </Animated.View>
  )
}
