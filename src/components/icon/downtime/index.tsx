import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconDowntime(props: Props): JSX.Element {
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
        d="M16.269 17.98a5.742 5.742 0 0 1-2.862 2.103 5.793 5.793 0 0 1-3.56.026 5.744 5.744 0 0 1-2.894-2.06 5.665 5.665 0 0 1-1.113-3.354V9.948M7.067 5.596A5.742 5.742 0 0 1 9.93 3.494a5.793 5.793 0 0 1 3.56-.027 5.745 5.745 0 0 1 2.894 2.06 5.665 5.665 0 0 1 1.113 3.354v4.748"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4 11.788 1.84-1.84 1.84 1.84M19.336 11.788l-1.84 1.84-1.84-1.84"
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
        d="M16.269 17.98a5.742 5.742 0 0 1-2.862 2.103 5.793 5.793 0 0 1-3.56.026 5.744 5.744 0 0 1-2.894-2.06 5.665 5.665 0 0 1-1.113-3.354V9.948M7.067 5.596A5.742 5.742 0 0 1 9.93 3.494a5.793 5.793 0 0 1 3.56-.027 5.745 5.745 0 0 1 2.894 2.06 5.665 5.665 0 0 1 1.113 3.354v4.748"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4 11.788 1.84-1.84 1.84 1.84M19.336 11.788l-1.84 1.84-1.84-1.84"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconDowntime
