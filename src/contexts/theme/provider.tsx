import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'
import { dark, radius, size, space, typography } from 'tokens'
import { ModeType } from 'tokens/palettes/types'

import ThemeContext, { ThemeContextType } from './context'
import { ThemeType } from './types'

const ThemeProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [mode, setMode] = useState<ModeType>('dark')

  const theme: ThemeType = {
    //   change with hook
    palette: dark,

    radius,
    size,
    space,
    typography,
  }

  const value: ThemeContextType = {
    theme,
    mode,
    setMode,
  }

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
