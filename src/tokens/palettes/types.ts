export type ModeType = 'dark' | 'light'

export interface BaseType {
  default: string
  pressed: string
  // rest
}

export interface BackgroundType {
  default: string
  container: string
  foreground: string
  disabled: string
}

export interface ForegroundType {
  default: string
  light: string
  medium: string
  inverse: string
  disabled: string
}

export interface PaletteType {
  primary: BaseType
  background: BackgroundType
  foreground: ForegroundType
}
