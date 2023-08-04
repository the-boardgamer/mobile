import React from 'react'

import { ThemeContext, type ThemeContextType } from './context'

export function useTheme(): ThemeContextType {
  const userThemeContext = React.useContext(ThemeContext)

  if (userThemeContext === null)
    throw new Error('useTheme has to be used within <ThemeContext.Provider>')
  return userThemeContext
}
