import { styled } from 'styled-components/native'

export const Container = styled.View((props) => ({
  gap: props.theme.size.size2,

  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: props.theme.palette.background.variant,
  borderRadius: props.theme.radius.radius4,
}))

export const TextInput = styled.TextInput((props) => ({
  paddingHorizontal: props.theme.size.size4,
  fontFamily: props.theme.typography.family.primary.medium,
  fontSize: props.theme.typography.fontSize.size4,
  height: props.theme.size.size11,
  flex: 1,
  color: props.theme.palette.foreground.default,
}))

export const IconContainer = styled.View((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: props.theme.size.size11,
  width: props.theme.size.size11,
}))

export const ActionButtonContainer = styled.Pressable((props) => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: props.theme.size.size11,
  width: props.theme.size.size11,
}))
