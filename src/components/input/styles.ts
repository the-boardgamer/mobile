import { styled } from 'styled-components/native'

export const Container = styled.View((props) => ({
  gap: '8px',

  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: props.theme.palette.background.variant,
  borderRadius: '12px',

  marginBottom: '20px',
  marginHorizontal: '20px',
}))

export const TextInput = styled.TextInput((props) => ({
  paddingHorizontal: '16px',
  fontFamily: props.theme.typography.family.primary.medium,
  fontSize: '14px',
  height: '44px',
  flex: 1,
  color: props.theme.palette.foreground.default,
}))

export const IconContainer = styled.View(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: '44px',
  width: '44px',
}))

export const ActionButtonContainer = styled.Pressable(() => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: '44px',
  width: '44px',
}))
