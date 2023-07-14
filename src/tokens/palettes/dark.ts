import { BackgroundType, BaseType, ForegroundType, PaletteType } from './types'

const primary: BaseType = {
  default: '#FBB85D',
  variant: '#F4AC4A',
  inverse: '#31213B',
  shade5: 'rgba(251, 184, 93, 0.05)',
  shade10: 'rgba(251, 184, 93, 0.1)',
  shade15: 'rgba(251, 184, 93, 0.15)',
  shade30: 'rgba(251, 184, 93, 0.3)',
  shade60: 'rgba(251, 184, 93, 0.6)',
  shade90: 'rgba(251, 184, 93, 0.9)',
}

const secondary: BaseType = {
  default: '#199B9C',
  variant: '#189293',
  inverse: '#FDF7E5',
  shade5: 'rgba(25, 155, 156, 0.05)',
  shade10: 'rgba(25, 155, 156, 0.1)',
  shade15: 'rgba(25, 155, 156, 0.15)',
  shade30: 'rgba(25, 155, 156, 0.3)',
  shade60: 'rgba(25, 155, 156, 0.6)',
  shade90: 'rgba(25, 155, 156, 0.9)',
}

const background: BackgroundType = {
  default: '#31213B',
  variant: '#271A2F',
  shade5: 'rgba(49, 33, 59, 0.05)',
  shade10: 'rgba(49, 33, 59, 0.1)',
  shade15: 'rgba(49, 33, 59, 0.15)',
  shade30: 'rgba(49, 33, 59, 0.3)',
  shade60: 'rgba(49, 33, 59, 0.6)',
  shade90: 'rgba(49, 33, 59, 0.9)',
}

const foreground: ForegroundType = {
  default: '#FDF7E5',
  variant: '#E4DFCF',
}

const dark: PaletteType = {
  background,
  foreground,
  primary,
  secondary,
}

export default dark
