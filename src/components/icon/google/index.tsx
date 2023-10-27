import Svg, { Path } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconGoogle(props: Props): JSX.Element {
  const { ...rest } = { ...defaultValues, ...props }

  const filledSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M20.988 10.205h-.738v-.038H12v3.666h5.18A5.498 5.498 0 016.5 12 5.5 5.5 0 0112 6.5a5.47 5.47 0 013.649 1.393L18.242 5.3A9.125 9.125 0 0012 2.833a9.167 9.167 0 108.988 7.372z"
        fill="#FFC107"
      />
      <Path
        d="M3.89 7.733l3.012 2.21A5.498 5.498 0 0112 6.5a5.47 5.47 0 013.649 1.393L18.242 5.3A9.125 9.125 0 0012 2.833a9.161 9.161 0 00-8.11 4.9z"
        fill="#FF3D00"
      />
      <Path
        d="M12 21.167c2.368 0 4.52-.907 6.146-2.38l-2.837-2.4A5.458 5.458 0 0112 17.5a5.497 5.497 0 01-5.171-3.642l-2.99 2.303C5.356 19.13 8.437 21.167 12 21.167z"
        fill="#4CAF50"
      />
      <Path
        d="M20.988 10.205h-.738v-.038H12v3.666h5.18a5.518 5.518 0 01-1.873 2.554l.002-.001 2.837 2.4c-.201.183 3.02-2.203 3.02-6.786 0-.615-.063-1.215-.178-1.795z"
        fill="#1976D2"
      />
    </Svg>
  )

  return filledSvg
}

export default IconGoogle
