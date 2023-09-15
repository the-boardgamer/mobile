import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

export const Image = styled(Animated.Image)((props) => ({
  borderRadius: props.theme.radius.radius4,
  width: '100%',
  height: 'auto',
  marginBottom: props.theme.size.size2,
}))
