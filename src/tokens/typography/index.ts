import { FamilyType, FontSizeType, LineHeightType, TypographyType } from './types'

const family: FamilyType = {
  primary: {
    bold: 'Quicksand-Bold',
    semibold: 'Quicksand-SemiBold',
    medium: 'Quicksand-Medium',
    regular: 'Quicksand-Regular',
    light: 'Quicksand-Light',
  },
  secondary: {
    bold: 'Manrope-Bold',
    semibold: 'Manrope-SemiBold',
    medium: 'Manrope-Medium',
    regular: 'Manrope-Regular',
    light: 'Manrope-Light',
  },
  tertiary: {
    bold: 'Arial-Bold',
    semibold: 'Arial-SemiBold',
    medium: 'Arial-Medium',
    regular: 'Arial-Regular',
    light: 'Arial-Light',
  },
}

const fontSize: FontSizeType = {
  size1: '4px',
  size2: '8px',
  size3: '12px',
  size4: '16px',
  size5: '20px',
  size6: '24px',
  size7: '28px',
  size8: '32px',
  size9: '36px',
  size10: '40px',
  size11: '56px',
  size12: '72px',
}

const lineHeight: LineHeightType = {
  size1: '6px',
  size2: '12px',
  size3: '18px',
  size4: '24px',
  size5: '30px',
  size6: '36px',
  size7: '42px',
  size8: '48px',
  size9: '54px',
  size10: '60px',
  size11: '84px',
  size12: '108px',
}

const typography: TypographyType = {
  family,
  fontSize,
  lineHeight,
}

export default typography
