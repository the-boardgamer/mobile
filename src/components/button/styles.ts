import { styled } from 'styled-components/native'

import { Props } from '.'
import { ThemeType } from '@contexts'

interface StyledProps {
  color: Props['color']
  theme: ThemeType
  variant: Props['variant']
}

const getBackground = (props: StyledProps): string => {
  const { theme, color, variant } = props

  if (variant === 'filled' && color === 'background') return theme.palette[color].variant
  if (variant === 'filled') return theme.palette[color].default
  if (variant === 'shade') return theme.palette[color].shade10
  return 'transparent'
}

const getColor = (props: StyledProps): string => {
  const { theme, color, variant } = props

  if (variant === 'filled') return theme.palette[color].inverse
  return theme.palette[color].default
}

export const Button = styled.Pressable<StyledProps>((props) => ({
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

export const Label = styled.Text<StyledProps>((props) => ({
  color: getColor(props),
  fontSize: props.theme.size.size5,
  fontWeight: 'bold',
  maxWidth: '80%',
  textAlign: 'center',
}))
