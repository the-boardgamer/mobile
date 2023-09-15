import { styled } from 'styled-components/native'

export const DescriptionContainer = styled.View((props) => ({
  margin: props.theme.size.size5,
  flexDirection: 'row',
  flex: 1,
}))

export const ContentContainer = styled.View(() => ({
  flex: 1,
}))

export const DescriptionTitle = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontSize: props.theme.typography.fontSize.size4,
  lineHeight: '38px',
  fontFamily: props.theme.typography.family.primary.bold,
}))

export const DescriptionContent = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontSize: '14px',
  lineHeight: '22px',
  letterSpacing: '2px',
  marginTop: props.theme.size.size3,
  minHeight: '66px',
  fontFamily: props.theme.typography.family.primary.regular,
}))
