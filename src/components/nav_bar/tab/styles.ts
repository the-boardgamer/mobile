import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

interface StyledProps {
  selected: boolean
}

export const Container = styled.Pressable((props) => ({
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

export const Label = styled(Animated.Text)<StyledProps>((props) => ({
  color: props.selected ? props.theme.palette.primary.inverse : props.theme.palette.primary.default,
  fontSize: props.theme.typography.fontSize.size4,
  fontFamily: props.theme.typography.family.primary.bold,
  textTransform: 'uppercase',
}))

export const IconContainer = styled.View({
  alignItens: 'center',
  justifyContent: 'center',
})
