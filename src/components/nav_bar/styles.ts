import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

import { ThemeType } from '@contexts/theme/types'

interface Props {
  theme: ThemeType
}

export const Selector = styled(Animated.View)<Props>((props) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  height: props.theme.size.size13,
  position: 'absolute',
  zIndex: -1,
  bottom: '30px',
  alignItems: 'center',
}))

export const Background = styled(Animated.View)<Props>((props) => ({
  backgroundColor: props.theme.palette.primary.default,
  position: 'absolute',
  height: props.theme.size.size13,
  borderRadius: props.theme.radius.radius5,
}))

export const Container = styled.View<Props>((props) => ({
  flex: 1,
  backgroundColor: props.theme.palette.background.default,
}))
