import { Animated, Pressable, TextInput } from 'react-native'
import { styled } from 'styled-components/native'

interface ContainerProps {
  isExpanded: boolean
}

export const Container = styled.View<ContainerProps>((props) => ({
  flexDirection: 'row',

  flexGrow: props.isExpanded ? 1 : 0,
  justifyContent: 'flex-end',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: props.theme.radius.radius4,
}))

const AnimatedInput = Animated.createAnimatedComponent(TextInput)

export const Input = styled(AnimatedInput)((props) => ({
  backgroundColor: props.theme.palette.background.variant,

  borderRadius: props.theme.radius.radius4,

  paddingLeft: props.theme.size.size4,
  paddingRight: props.theme.size.size11,
  fontFamily: props.theme.typography.family.primary.medium,
  fontSize: props.theme.typography.fontSize.size4,
  height: props.theme.size.size11,
  flex: 1,
  color: props.theme.palette.foreground.default,

  width: '100%',

  position: 'absolute',
}))

const AnimatedButton = Animated.createAnimatedComponent(Pressable)

export const ActionButtonContainer = styled(AnimatedButton)((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: props.theme.size.size11,
  width: props.theme.size.size11,

  backgroundColor: props.theme.palette.background.variant,
  borderTopRightRadius: props.theme.radius.radius4,
  borderBottomRightRadius: props.theme.radius.radius4,

  borderTopLeftRadius: props.theme.radius.radius4,
  borderBottomLeftRadius: props.theme.radius.radius4,
}))
