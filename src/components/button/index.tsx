import { Animated, PressableProps } from 'react-native'

import * as Styled from './styles'
import Icon from '@components/icon'
import { useTheme } from '@contexts'
import { useShrinkAnimation } from '@hooks/useShrinkAnimation'

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
  const { theme } = useTheme()

  const { animatedScale, handlePressIn, handlePressOut } = useShrinkAnimation()

  const getIconColor =
    variant === 'filled' ? theme.palette[color].inverse : theme.palette[color].default

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
        {...rest}
      >
        {icon && (
          <Icon
            icon={icon}
            color={getIconColor}
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
