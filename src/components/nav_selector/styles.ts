import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

export const Container = styled.Pressable((props) => ({
  flexDirection: 'row',
  backgroundColor: props.theme.palette.background.default,
  position: 'absolute',
  bottom: props.theme.size.size2,
  alignSelf: 'center',
  padding: props.theme.size.size1,
  borderRadius: props.theme.radius.radius7,
  shadowColor: props.theme.palette.background.variant,
  shadowOpacity: '1',
  shadowRadius: props.theme.radius.radius5,
  elevation: '24',
}))

export const Selector = styled(Animated.View)((props) => ({
  position: 'absolute',
  height: '100%',
  margin: props.theme.size.size1,
  zIndex: -1,
}))

export const Background = styled(Animated.View)((props) => ({
  position: 'absolute',
  height: '100%',
  width: '100%',
  borderRadius: props.theme.radius.radius7,
  backgroundColor: props.theme.palette.primary.default,
}))
