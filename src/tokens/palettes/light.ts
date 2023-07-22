import { BackgroundType, BaseType, ForegroundType, PaletteType } from './types'

const primary: BaseType = {
  default: '#654345',
  variant: '#52393A',
  inverse: '#FDF7E5',
  shade5: 'rgba(101, 67, 69, 0.05)',
  shade10: 'rgba(101, 67, 69, 0.1)',
  shade15: 'rgba(101, 67, 69, 0.15)',
  shade30: 'rgba(101, 67, 69, 0.3)',
  shade60: 'rgba(101, 67, 69, 0.6)',
  shade90: 'rgba(101, 67, 69, 0.9)',
}

const secondary: BaseType = {
  default: '#DE404B',
  variant: '#C93943',
  inverse: '#FDF7E5',
  shade5: 'rgba(222, 64, 75, 0.05)',
  shade10: 'rgba(222, 64, 75, 0.1)',
  shade15: 'rgba(222, 64, 75, 0.15)',
  shade30: 'rgba(222, 64, 75, 0.3)',
  shade60: 'rgba(222, 64, 75, 0.6)',
  shade90: 'rgba(222, 64, 75, 0.9)',
}

const background: BackgroundType = {
  default: '#FDF7E5',
  variant: '#F4EEDB',
  inverse: '#FDF7E5',
  shade5: 'rgba(253, 247, 229, 0.05)',
  shade10: 'rgba(253, 247, 229, 0.1)',
  shade15: 'rgba(253, 247, 229, 0.15)',
  shade30: 'rgba(253, 247, 229, 0.3)',
  shade60: 'rgba(253, 247, 229, 0.6)',
  shade90: 'rgba(253, 247, 229, 0.9)',
}

const foreground: ForegroundType = {
  default: '#31213B',
  variant: '#271A2F',
}

const light: PaletteType = {
  background,
  foreground,
  primary,
  secondary,
}

export default light
