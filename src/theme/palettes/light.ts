import { BackgroundType, BaseType, ForegroundType, PaletteType } from '../types'

const primary: BaseType = {
  default: '#FDF7E5',
  pressed: 'white',
  // rest
}

const background: BackgroundType = {
  default: '#FDF7E5',
  container: 'white',
  foreground: 'white',
  disabled: 'white',
}

const foreground: ForegroundType = {
  default: '#31213B',
  light: 'purple',
  medium: 'purple',
  inverse: 'purple',
  disabled: 'purple',
}

const light: PaletteType = {
  background,
  foreground,
  primary,
}

export default light
