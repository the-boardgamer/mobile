import { styled } from 'styled-components/native'

import { default as MeepleIcon } from '@components/icon'

export const Container = styled.TouchableOpacity((props) => ({
  flex: 1,
  gap: props.theme.size.size2,
  alignItems: 'center',
  flexDirection: 'row',
}))

export const IconContainer = styled.View((props) => ({
  padding: props.theme.size.size3,
  backgroundColor: props.theme.palette.background.variant,
  borderRadius: props.theme.size.size24,
}))

export const Icon = styled(MeepleIcon)((props) => ({
  width: props.theme.size.size24,
  height: props.theme.size.size24,
}))

export const TextContent = styled.View((props) => ({
  flexDirection: 'row',
  flex: 1,
  gap: props.theme.size.size2,
  justifyContent: 'center',
  alignItems: 'center',
}))

export const Data = styled.Text((props) => ({
  fontFamily: props.theme.typography.family.primary.bold,
  fontSize: props.theme.typography.fontSize.size5,
  color: props.theme.palette.foreground.default,
}))

export const Label = styled.Text((props) => ({
  fontFamily: props.theme.typography.family.primary.medium,
  fontSize: props.theme.typography.fontSize.size5,
  color: props.theme.palette.foreground.default,
  flex: 1,
}))
