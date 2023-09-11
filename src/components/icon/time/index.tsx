import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconTime(props: Props): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const filledSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.301 7.22V4H7.383v3.22a7.134 7.134 0 0 0 1.873 4.806 7.134 7.134 0 0 0-1.873 4.806v3.22h8.918v-3.22a7.134 7.134 0 0 0-1.873-4.806 7.134 7.134 0 0 0 1.873-4.807Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.6 4h12.484M5.6 20.052h12.484"
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
        d="M16.301 7.22V4H7.383v3.22a7.134 7.134 0 0 0 1.873 4.806 7.134 7.134 0 0 0-1.873 4.806v3.22h8.918v-3.22a7.134 7.134 0 0 0-1.873-4.806 7.134 7.134 0 0 0 1.873-4.807ZM5.6 4h12.484M5.6 20.052h12.484"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconTime
