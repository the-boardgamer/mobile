import React, { useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native'
import { ModeType } from 'theme/palettes/types'

import dark from '../../theme/palettes/dark'
import sizes from '../../theme/sizes'
import typography from '../../theme/typography'
import ThemeContext, { ThemeContextType } from './context'
import { ThemeType } from './types'

const ThemeProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [mode, setMode] = useState<ModeType>('dark')

  //   change with hook
  const theme: ThemeType = {
    palette: dark,
    sizes,
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
