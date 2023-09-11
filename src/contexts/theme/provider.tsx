import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'

import { dark, light, radius, size, typography } from '../../tokens'
import { ModeType } from '../../tokens/palettes/types'
import { ThemeContext, type ThemeContextType } from './context'
import { ThemeType } from './types'

export const ThemeProvider = (props: { children: React.ReactNode }): JSX.Element => {
  const [mode, setMode] = useState<ModeType>('light')

  const theme: ThemeType = {
    // change this later to be easier to change modes
    palette: mode === 'dark' ? dark : light,

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
