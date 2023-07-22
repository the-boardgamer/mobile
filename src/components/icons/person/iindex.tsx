import Svg, { Path } from 'react-native-svg'

import { Props } from '../home'

const PersonLined = ({ width, height, viewBox, color, ...props }: Props): JSX.Element => (
  <Svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    {...props}
  >
    <Path
      d="M18.667 6.26c0 3.459-2.985 6.262-6.667 6.262S5.333 9.719 5.333 6.26 8.318 0 12 0s6.667 2.803 6.667 6.26zM22 19.304c0-2.593-4.477-4.695-10-4.695S2 16.71 2 19.304C2 21.898 2 24 12 24s10-2.102 10-4.696z"
      fill={color}
    />
  </Svg>
)

export default PersonLined
