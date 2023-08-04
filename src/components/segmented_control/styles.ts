import { FontStyle } from '@react-native-segmented-control/segmented-control'
import { ViewStyle } from 'react-native'
import { DefaultTheme } from 'styled-components'

export const styledFont = (theme: DefaultTheme): FontStyle => ({
  color: theme.palette.primary.default,
  fontWeight: 'bold',
  fontSize: theme.size.size4,
})

export const styledActiveFont = (theme: DefaultTheme): FontStyle => ({
  color: theme.palette.primary.inverse,
  fontWeight: 'bold',
  fontSize: theme.size.size4,
})

export const styledSegmented = (theme: DefaultTheme): ViewStyle => ({
  height: 58,
  borderRadius: theme.radius.radius3,
  backgroundColor: theme.palette.background.variant,
  margin: 20,
})
