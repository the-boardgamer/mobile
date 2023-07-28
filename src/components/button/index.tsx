import { Animated, PressableProps } from 'react-native'
import { useTheme } from 'styled-components'

import * as Styled from './styles'

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
          <Styled.Icon
            icon={icon}
            theme={theme}
            color={color}
            variant={variant}
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
