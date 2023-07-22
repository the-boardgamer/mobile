import { PaletteType } from '../../tokens/palettes/types'
import { RadiusType } from '../../tokens/radius/types'
import { SizeType } from '../../tokens/size/types'
import { TypographyType } from '../../tokens/typography/types'

export interface ThemeType {
  palette: PaletteType
  radius: RadiusType
  size: SizeType
  typography: TypographyType
}
