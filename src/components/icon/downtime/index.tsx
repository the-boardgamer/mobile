import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconDowntime(props: Props): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M5 15L7 13L9 15"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 13.6C7 14.4487 7.14197 15.2589 7.39979 16C8.2157 18.3455 10.1918 20 12.5 20C15.5376 20 18 18.1346 18 14.6V9.4C18 5.86538 15.5376 4 12.5 4C10.1918 4 8.2157 5.65454 7.39979 8"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )

  return filled ? linedSvg : linedSvg
}

export default IconDowntime
