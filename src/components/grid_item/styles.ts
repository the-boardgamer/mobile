import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

export const Image = styled(Animated.Image)((props) => ({
  borderTopLeftRadius: props.theme.radius.radius4,
  borderBottomLeftRadius: props.theme.radius.radius4,
  width: '100%',
  flex: 1,
  height: 'auto',
  marginBottom: props.theme.size.size5,
}))
