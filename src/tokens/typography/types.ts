export interface Weighttype {
  bold: string
  semibold: string
  medium: string
  regular: string
  light: string
}
export interface FamilyType {
  /** Quicksand */ primary: Weighttype
  /** Manrope */ secondary: Weighttype
  /** Arial */ tertiary: Weighttype
}

export interface FontSizeType {
  /** 4px */ size1: string
  /** 8px */ size2: string
  /** 12px */ size3: string
  /** 16px */ size4: string
  /** 20px */ size5: string
  /** 24px */ size6: string
  /** 28px */ size7: string
  /** 32px */ size8: string
  /** 36px */ size9: string
  /** 40px */ size10: string
  /** 56px */ size11: string
  /** 72px */ size12: string
}
export interface LineHeightType {
  /** 6px */ size1: string
  /** 12px */ size2: string
  /** 18px */ size3: string
  /** 24px */ size4: string
  /** 30px */ size5: string
  /** 36px */ size6: string
  /** 42px */ size7: string
  /** 48px */ size8: string
  /** 54px */ size9: string
  /** 60px */ size10: string
  /** 84px */ size11: string
  /** 108px */ size12: string
}

export interface TypographyType {
  family: FamilyType
  fontSize: FontSizeType
  lineHeight: LineHeightType
}
