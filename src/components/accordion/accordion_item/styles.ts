import { styled } from 'styled-components/native'

export const AccordionItemContainer = styled.View((props) => ({
  backgroundColor: props.theme.palette.background.variant,
  borderRadius: props.theme.radius.radius4,
  flex: 1,
  marginBottom: props.theme.size.size3,
  overflow: 'hidden',
}))

export const TitleContainer = styled.Pressable((props) => ({
  alignItems: 'center',
  backgroundColor: props.theme.palette.background.variant,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: props.theme.size.size3,
  paddingVertical: props.theme.size.size2,
}))

export const DescriptionTitle = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontFamily: props.theme.typography.family.primary.bold,
  fontSize: props.theme.typography.fontSize.size5,
  maxWidth: '85%',
}))

export const DescriptionContent = styled.Text((props) => ({
  color: props.theme.palette.foreground.default,
  fontFamily: props.theme.typography.family.primary.regular,
  fontSize: props.theme.typography.fontSize.size4,
  letterSpacing: '2px',
  marginBottom: props.theme.size.size4,
  marginHorizontal: props.theme.size.size3,
  textAlign: 'justify',
}))
