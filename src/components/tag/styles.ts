import { styled } from 'styled-components/native'

import { ThemeType } from '@contexts/theme/types'

interface StylesProps {
  theme: ThemeType
}

export const Container = styled.View<StylesProps>((props) => ({
  alignSelf: 'center',
  backgroundColor: 'transparent',
  border: `1px solid ${props.theme.palette.foreground.default}`,
  borderRadius: props.theme.radius.radius7,
  padding: props.theme.size.size1,
  paddingLeft: props.theme.size.size4,
  paddingRight: props.theme.size.size4,
  maxWidth: props.theme.size.size40,
}))

export const Label = styled.Text<StylesProps>((props) => ({
  color: props.theme.palette.foreground.default,
  fontFamily: props.theme.typography.family.primary.medium,
  fontSize: props.theme.size.size5,
  textAlign: 'center',
}))
