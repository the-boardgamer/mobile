import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconMeeple(props: Props): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const filledSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        fill={color}
        d="M9.333 19H4.89a.893.893 0 0 1-.629-.258.88.88 0 0 1-.26-.624c0-1.765 3.003-4.33 3.556-5.294-.89 0-3.556-.442-3.556-1.765 0-1.765 3.556-3.088 5.333-3.53C9.333 6.206 9.778 4 12 4s2.667 2.206 2.667 3.53C16.444 7.97 20 9.293 20 11.058c0 1.323-2.667 1.764-3.556 1.764.553.965 3.556 3.53 3.556 5.295a.88.88 0 0 1-.26.624.893.893 0 0 1-.629.258h-4.444c-.89 0-1.778-3.53-2.667-3.53-.889 0-1.778 3.53-2.667 3.53Z"
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
        d="M9.333 19H4.89a.893.893 0 0 1-.629-.258.88.88 0 0 1-.26-.624c0-1.765 3.003-4.33 3.556-5.294-.89 0-3.556-.442-3.556-1.765 0-1.765 3.556-3.088 5.333-3.53C9.333 6.206 9.778 4 12 4s2.667 2.206 2.667 3.53C16.444 7.97 20 9.293 20 11.058c0 1.323-2.667 1.764-3.556 1.764.553.965 3.556 3.53 3.556 5.295a.88.88 0 0 1-.26.624.893.893 0 0 1-.629.258h-4.444c-.89 0-1.778-3.53-2.667-3.53-.889 0-1.778 3.53-2.667 3.53Z"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconMeeple
