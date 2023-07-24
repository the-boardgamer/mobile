import Svg, { Path } from 'react-native-svg'

import { Props } from '../types'

function IconArrow({
  filled,
  color = '#31213B',
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  ...rest
}: Props): JSX.Element {
  const props = {
    width,
    height,
    viewBox,
    fill: color,
  }

  const filledSvg = (
    <Svg
      {...props}
      {...rest}
      fill="none"
    >
      <Path
        d="M19 12H5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 19L5 12L12 5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  const linedSvg = (
    <Svg
      {...props}
      {...rest}
      fill="none"
    >
      <Path
        d="M19 12H5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 19L5 12L12 5"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconArrow
