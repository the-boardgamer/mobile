import React from 'react'

import { ModeType } from '../../tokens/palettes/types'

export interface ThemeContextType {
  mode: ModeType
  setMode: (mode: ModeType) => void
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null)
ThemeContext.displayName = 'ThemeContext'
