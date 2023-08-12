import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

import { dark, radius, size, typography } from '../../tokens'
import { ModeType } from '../../tokens/palettes/types'
import { ThemeContext, type ThemeContextType } from './context'
import { ThemeType } from './types'

export const ThemeProvider = (props: { children: React.ReactNode }): JSX.Element => {
  const [mode, setMode] = useState<ModeType>('dark')

  const theme: ThemeType = {
    palette: dark,

    radius,
    size,
    typography,
  }

  const value: ThemeContextType = {
    theme,
    mode,
    setMode,
  }

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{props.children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
