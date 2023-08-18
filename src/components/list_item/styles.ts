import React from 'react'
import { ImageProps, TextProps } from 'react-native'
import { styled } from 'styled-components/native'

import { Props } from '.'
import { ThemeType } from '@contexts/theme/types'

interface StylesProps {
  theme: ThemeType
}

interface StylesImageProps extends ImageProps {
  theme: ThemeType
}

interface StylesTextProps extends TextProps {
  theme: ThemeType
  lines: number
}

export const Title = styled.Text<StylesTextProps>((props) => ({
  color: props.theme.palette.foreground.default,
  fontSize: props.lines === 1 ? props.theme.size.size6 : props.theme.size.size5,
  fontFamily: props.theme.typography.family.primary.bold,
}))

export const Container = styled.View<StylesProps>((props) => ({
  backgroundColor: props.theme.palette.background.variant,
  borderRadius: props.theme.radius.radius5,
  flexDirection: 'row',
}))

export const StartContainer = styled.View<StylesProps>(() => ({
  position: 'relative',
}))

export const ForegroundImage = styled.View<StylesProps>(() => ({
  position: 'absolute',
  flex: 1,
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
}))

export const CoverImage = styled.Image<StylesImageProps>((props) => ({
  borderTopLeftRadius: props.theme.radius.radius5,
  borderBottomLeftRadius: props.theme.radius.radius5,
  width: '200px',
  height: '120px',
}))

export const EndContainer = styled.View<StylesProps>((props) => ({
  paddingTop: props.theme.size.size5,
  paddingBottom: props.theme.size.size5,
  paddingRight: props.theme.size.size4,
  paddingLeft: props.theme.size.size4,
  flex: 1,
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  gap: '6px',
}))

export const PublisherContainer = styled.View<StylesProps>((props) => ({
  flexDirection: 'row',
  gap: props.theme.size.size2,
}))

export const PublisherName = styled.Text<StylesProps>((props) => ({
  color: props.theme.palette.foreground.default,
  fontSize: props.theme.size.size4,
  fontFamily: props.theme.typography.family.primary.regular,
  textAlign: 'center',
  paddingRight: props.theme.size.size5,
}))

export const Icon = ({
  icon,
  theme,
}: {
  icon: Exclude<Props['icon'], undefined>
  theme: ThemeType
}): JSX.Element =>
  React.cloneElement(icon, {
    color: theme.palette.foreground.default,
  })
