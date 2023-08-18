import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

import { ThemeType } from '@contexts/theme/types'

interface BackgroundProps {
  theme: ThemeType
  selected: boolean
}

export const Background = styled.Pressable<BackgroundProps>((props) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: props.theme.size.size10,
  overflow: 'hidden',
  paddingVertical: props.theme.size.size3,
  paddingHorizontal: props.theme.size.size4,
  gap: props.theme.size.size2,
  borderRadius: props.theme.radius.radius5,
}))

interface LabelProps {
  selected: boolean
  theme: ThemeType
}

export const Label = styled(Animated.Text)<LabelProps>((props) => ({
  color: props.selected ? props.theme.palette.primary.inverse : props.theme.palette.primary.default,
  fontSize: props.theme.typography.fontSize.size4,
  fontFamily: props.theme.typography.family.primary.bold,
  textTransform: 'uppercase',
}))

export const IconContainer = styled.View(() => ({
  alignItens: 'center',
  justifyContent: 'center',
}))
