import { styled } from 'styled-components/native'

export const Container = styled.TouchableOpacity(() => ({
  flex: 1,
  alignItems: 'center',
}))

export const IconContainer = styled.View((props) => ({
  padding: props.theme.size.size3,
  backgroundColor: props.theme.palette.background.variant,
  borderRadius: props.theme.size.size24,
}))

export const TextContent = styled.View(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}))

export const Data = styled.Text((props) => ({
  fontFamily: props.theme.typography.family.primary.bold,
  fontSize: props.theme.typography.fontSize.size5,
  color: props.theme.palette.foreground.default,
}))

export const Label = styled.Text((props) => ({
  fontSize: props.theme.typography.fontSize.size4,
}))
