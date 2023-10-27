import { styled } from 'styled-components/native'

import { Props } from '.'
import { ThemeType } from '@contexts'

interface StyledProps {
  action: boolean
  background: string
  expanded: Props['expanded']
  foreground: string
  theme: ThemeType
}

export const Button = styled.Pressable<StyledProps>((props) => ({
  backgroundColor: props.background,
  padding: props.action ? props.theme.size.size2 : props.theme.size.size4,
  borderRadius: props.action ? props.theme.size.size3 : props.theme.size.size4,
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: props.expanded ? '100%' : 'auto',
  flexDirection: 'row',
  gap: props.theme.size.size4,
}))

export const Label = styled.Text<StyledProps>((props) => ({
  color: props.foreground,
  fontSize: props.theme.size.size5,
  fontWeight: 'bold',
  textAlign: 'center',
}))
