import { createContext } from 'react'
import { ModeType } from 'tokens/palettes/types'

import { ThemeType } from './types'

export interface ThemeContextType {
  theme: ThemeType
  mode: ModeType
  setMode: (mode: ModeType) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)
ThemeContext.displayName = 'ThemeContext'

export default ThemeContext
