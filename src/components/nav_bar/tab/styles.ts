import { Animated, Platform } from 'react-native'
import { styled } from 'styled-components/native'

interface StyledProps {
  selected: boolean
}

export const Container = styled.Pressable(() => ({
  flex: 1,
  justifyContent: 'center',
}))

export const Tab = styled.Pressable((props) => ({
  flexDirection: 'row',
  justifyContent: 'center',

  alignItems: 'center',

  overflow: 'hidden',
  paddingVertical: props.theme.size.size3,
  paddingHorizontal: props.theme.size.size4,
  gap: props.theme.size.size2,
  borderRadius: props.theme.radius.radius5,

  alignSelf: 'center',
}))

export const Label = styled(Animated.Text)<StyledProps>((props) => ({
  color: props.selected ? props.theme.palette.primary.inverse : 'transparent',
  fontSize: props.theme.typography.fontSize.size3,
  fontFamily: props.theme.typography.family.primary.bold,
  textTransform: 'uppercase',
  ...(Platform.OS === 'android' && {
    paddingBottom: '2px',
  }),
}))
