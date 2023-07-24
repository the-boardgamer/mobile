import Svg, { Path } from 'react-native-svg'

import { Props } from '../types'

function IconGrid({
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
        d="M10 3H3V10H10V3Z"
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 3H14V10H21V3Z"
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 14H14V21H21V14Z"
        fill={color}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 14H3V21H10V14Z"
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
      {...props}
      {...rest}
      fill="none"
    >
      <Path
        d="M10 3H3V10H10V3Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 3H14V10H21V3Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 14H14V21H21V14Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 14H3V21H10V14Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconGrid
