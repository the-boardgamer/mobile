export type ModeType = 'dark' | 'light'

export interface BaseType {
  default: string
  variant: string
  inverse: string
  shade5: string
  shade10: string
  shade15: string
  shade30: string
  shade60: string
  shade90: string
}

export interface BackgroundType {
  default: string
  variant: string
  inverse: string
  shade5: string
  shade10: string
  shade15: string
  shade30: string
  shade60: string
  shade90: string
}

export interface ForegroundType {
  default: string
  inverse: string
  shade30: string
  variant: string
}

export interface PaletteType {
  primary: BaseType
  secondary: BaseType
  background: BackgroundType
  foreground: ForegroundType
}
