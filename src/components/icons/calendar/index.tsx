import Svg, { Path } from 'react-native-svg'

import { Props } from '../types'

function IconCalendar({
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
        d="M16 2V6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 2V6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 20V10H3V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20Z"
        fill={color}
      />
      <Path
        d="M21 20V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V20M21 20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20M21 20V10H3V20"
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
        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 2V6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 2V6"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 10H21"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
  return filled ? filledSvg : linedSvg
}

export default IconCalendar
