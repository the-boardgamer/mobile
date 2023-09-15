import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconSetup(props: Props): JSX.Element {
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
        d="M3.543 10.133V19.2m16.19 0v-9.067"
      />
      <Path
        fill={color}
        d="M1.6 5.6h20.076H1.6Zm18.96 0H2.716V9c0 .3.118.589.327.801.21.213.493.332.789.332h15.614c.296 0 .58-.12.79-.332.208-.212.326-.5.326-.801V5.6Z"
      />
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1.6 5.6h20.076m-1.115 0H2.715V9c0 .3.118.589.327.801.21.213.493.332.789.332h15.614c.296 0 .58-.12.79-.332.208-.212.326-.5.326-.801V5.6Z"
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
        d="M3.543 10.133V19.2m16.19 0v-9.067M1.6 5.6h20.076m-1.115 0H2.715V9c0 .3.118.589.327.801.21.213.493.332.789.332h15.614c.296 0 .58-.12.79-.332.208-.212.326-.5.326-.801V5.6Z"
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconSetup
