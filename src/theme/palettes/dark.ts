import { BackgroundType, BaseType, ForegroundType, PaletteType } from '../types'

const primary: BaseType = {
  default: '#31213B',
  pressed: 'purple',
  // rest
}

const background: BackgroundType = {
  default: '#31213B',
  container: 'purple',
  foreground: 'purple',
  disabled: 'purple',
}

const foreground: ForegroundType = {
  default: '#FDF7E5',
  light: 'white',
  medium: 'white',
  inverse: 'white',
  disabled: 'white',
}

const dark: PaletteType = {
  background,
  foreground,
  primary,
}

export default dark
