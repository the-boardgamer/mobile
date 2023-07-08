// Palette Types
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

// Typography Types
export interface FamilyType {
  regular: string
  text: string
  title: string
}

export interface FontSizeType {
  fontSize1: string
  fontSize2: string
  fontSize3: string
  fontSize4: string
  fontSize5: string
  fontSize6: string
  fontSize7: string
  fontSize8: string
}

export interface TypographyType {
  family: FamilyType
  fontSize: FontSizeType
}

// Sizes Types
export interface SpaceType {
  space1: string
  space2: string
  space3: string
  space4: string
  space5: string
}

export interface SizeType {
  size1: string
  size2: string
  size3: string
  size4: string
  size5: string
}

export interface RadiusType {
  radius1: string
  radius2: string
  radius3: string
  radius4: string
  radius5: string
}

export interface SizesType {
  radius: RadiusType
  size: SizeType
  space: SpaceType
}
