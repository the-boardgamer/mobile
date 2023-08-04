import React from 'react'
import { DefaultTheme } from 'styled-components'
import { styled } from 'styled-components/native'

import { Props } from '.'
import { ThemeType } from '@contexts/theme/types'

interface StylesProps {
  color: Exclude<Props['color'], undefined>
  theme: ThemeType
  variant: Exclude<Props['variant'], undefined>
}

const getBackground = (props: StylesProps): string => {
  const { theme, color, variant } = props

  if (variant === 'filled') return theme.palette[color].default
  if (variant === 'shade') return theme.palette[color].shade5
  return 'transparent'
}

const getColor = (props: StylesProps): string => {
  const { theme, color, variant } = props

  if (variant === 'filled') return theme.palette[color].inverse
  return theme.palette[color].default
}

const getIconColor = (
  color: Exclude<Props['color'], undefined>,
  variant: Exclude<Props['variant'], undefined>,
  theme: DefaultTheme,
): string => {
  if (variant === 'filled') return theme.palette[color].inverse
  return theme.palette[color].default
}

export const Button = styled.Pressable<StylesProps>((props) => ({
  backgroundColor: getBackground(props),
  padding: props.theme.size.size5,
  borderRadius: props.theme.radius.radius5,
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: 'auto',
  flexDirection: 'row',
  gap: props.theme.size.size4,
  border:
    props.variant === 'outlined' ? `2px solid ${props.theme.palette[props.color].default}` : 'none',
}))

export const Label = styled.Text<StylesProps>((props) => ({
  color: getColor(props),
  fontSize: props.theme.size.size5,
  fontWeight: 'bold',
  maxWidth: '80%',
  textAlign: 'center',
}))

export const Icon = ({
  icon,
  theme,
  color,
  variant,
}: {
  color: Exclude<Props['color'], undefined>
  icon: Exclude<Props['icon'], undefined>
  theme: DefaultTheme
  variant: Exclude<Props['variant'], undefined>
}): JSX.Element =>
  React.cloneElement(icon, {
    color: getIconColor(color, variant, theme),
  })
