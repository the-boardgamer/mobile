import { Animated } from 'react-native'
import { styled } from 'styled-components/native'

interface StyledProps {
  selected: boolean
}

export const Container = styled.View((props) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  paddingVertical: props.theme.size.size2,
  paddingHorizontal: props.theme.size.size2,
  gap: props.theme.size.size1,
}))

export const Label = styled(Animated.Text)<StyledProps>((props) => ({
  color: props.selected ? props.theme.palette.primary.inverse : props.theme.palette.primary.default,
  fontSize: props.theme.typography.fontSize.size3,
  fontFamily: props.theme.typography.family.primary.bold,
  textTransform: 'uppercase',
}))
