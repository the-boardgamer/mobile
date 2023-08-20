import { styled } from 'styled-components/native'

export const Container = styled.View((props) => ({
  gap: props.theme.size.size2,
  flex: 1,
}))

export const Title = styled.Text((props) => ({
  fontFamily: props.theme.typography.family.primary.semibold,
  color: props.theme.palette.foreground.default,
  fontSize: props.theme.typography.fontSize.size7,
  lineHeight: props.theme.typography.fontSize.size8,
}))

export const Description = styled.Text((props) => ({
  fontFamily: props.theme.typography.family.primary.regular,
  color: props.theme.palette.foreground.default,
  fontSize: props.theme.typography.fontSize.size4,
  lineHeight: props.theme.typography.lineHeight.size4,
}))
