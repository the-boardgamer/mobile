import { Animated, Platform } from 'react-native'
import { styled } from 'styled-components/native'

export const Container = styled.View((props) => ({
  flex: 1,
  backgroundColor: props.theme.palette.background.default,
}))

export const Selector = styled(Animated.View)((props) => ({
  alignItems: 'center',
  height: props.theme.size.size10,
  position: 'absolute',
  zIndex: -1,
  bottom: Platform.OS === 'android' ? props.theme.size.size3 : props.theme.size.size6,
}))

export const Background = styled(Animated.View)((props) => ({
  height: '100%',
  borderRadius: props.theme.radius.radius4,
  backgroundColor: props.theme.palette.primary.default,
}))
