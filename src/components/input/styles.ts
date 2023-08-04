import React from 'react'
import { PressableProps, TextInputProps } from 'react-native'
import { DefaultTheme, styled } from 'styled-components/native'

import { Props } from '.'
import { ThemeType } from '@contexts/theme/types'

interface StylesContainerProps extends TextInputProps {
  theme: ThemeType
  showInput: boolean
  outlined: Exclude<Props['outlined'], undefined>
}

interface StylesInputProps extends TextInputProps {
  theme: ThemeType
}
interface StylesPressableProps extends PressableProps {
  theme: ThemeType
  showInput: boolean
}

export const Input = styled.TextInput<StylesInputProps>((props) => ({
  color: props.theme.palette.foreground.variant,
  flex: 1,
  flexDirection: 'row',
  marginHorizontal: props.theme.size.size4,
  marginVertical: '24px',
}))

export const Container = styled.View<StylesContainerProps>((props) => ({
  alignSelf: 'flex-end',
  backgroundColor: props.theme.palette.background.variant,
  borderColor: 'red',
  borderRadius: props.theme.radius.radius5,
  borderWidth: props.outlined ? '1px' : '0px',
  flexDirection: props.showInput ? 'row' : 'column',
  fontSize: props.theme.typography.fontSize.fontSize4,
  justifyContent: 'space-between',
  margin: props.theme.size.size5,
  paddingHorizontal: props.theme.size.size5,
  paddingVertical: !props.showInput ? props.theme.size.size5 : '0px',
}))

export const IconContainer = styled.Pressable<StylesPressableProps>((props) => ({
  alignSelf: !props.showInput ? 'flex-end' : 'center',
}))

export const Icon = ({
  icon,
  theme,
}: {
  icon: Exclude<Props['icon'], undefined>
  theme: DefaultTheme
}): JSX.Element =>
  React.cloneElement(icon, {
    color: theme.palette.foreground.variant,
    backgroundColor: theme.palette.background.variant,
  })
