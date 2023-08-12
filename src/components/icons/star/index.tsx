import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconStar(props: Partial<Props>): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const filledSvg = (
    <Svg
      {...rest}
      fill="none"
    >
      <Path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  const linedSvg = (
    <Svg
      {...rest}
      fill="none"
    >
      <Path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconStar
