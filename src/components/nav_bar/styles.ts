import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

export const Selector = styled(Animated.View)((props) => ({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  height: props.theme.size.size12,
  position: 'absolute',
  zIndex: -1,
  bottom: props.theme.size.size7,
  alignItems: 'center',
}))

export const Background = styled(Animated.View)((props) => ({
  backgroundColor: props.theme.palette.primary.default,
  position: 'absolute',
  height: '100%',
  borderRadius: props.theme.radius.radius5,
}))

export const Container = styled.View((props) => ({
  flex: 1,
  backgroundColor: props.theme.palette.background.default,
}))
