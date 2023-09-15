import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconAge(props: Props): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const filledSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.696 21.067a8.933 8.933 0 1 0 0-17.867 8.933 8.933 0 0 0 0 17.867Z"
      />
      <Path
        fill={color}
        d="M8.346 13.25a1.117 1.117 0 1 0 0-2.233 1.117 1.117 0 0 0 0 2.233ZM15.046 13.25a1.117 1.117 0 1 0 0-2.233 1.117 1.117 0 0 0 0 2.233Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.93 16.042a4.655 4.655 0 0 1-2.234.558 4.655 4.655 0 0 1-2.233-.558M11.696 3.2c-1.675 1.795-1.675 3.59-1.675 3.59 0 .38.177.745.49 1.014.315.27.74.421 1.185.421.444 0 .87-.151 1.184-.42.315-.27.491-.635.491-1.016"
      />
    </Svg>
  )

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.696 21.067a8.933 8.933 0 1 0 0-17.867 8.933 8.933 0 0 0 0 17.867Z"
      />
      <Path
        fill={color}
        d="M8.346 13.25a1.117 1.117 0 1 0 0-2.233 1.117 1.117 0 0 0 0 2.233ZM15.046 13.25a1.117 1.117 0 1 0 0-2.233 1.117 1.117 0 0 0 0 2.233Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.93 16.042a4.655 4.655 0 0 1-2.234.558 4.655 4.655 0 0 1-2.233-.558M11.696 3.2c-1.675 1.795-1.675 3.59-1.675 3.59 0 .38.177.745.49 1.014.315.27.74.421 1.185.421.444 0 .87-.151 1.184-.42.315-.27.491-.635.491-1.016"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconAge
