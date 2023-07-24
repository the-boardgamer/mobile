import Svg, { Path } from 'react-native-svg'

import { Props } from '../types'

function IconHome({
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
    >
      <Path
        d="M1 20.127V10.046c0-.89.43-1.73 1.166-2.274L10.777 1.4a2.07 2.07 0 012.446 0l8.611 6.372A2.832 2.832 0 0123 10.046v10.081C23 21.714 21.657 23 20 23h-3c-1.105 0-2-.858-2-1.915v-4.31c0-.529-.448-.957-1-.957h-4c-.552 0-1 .428-1 .957v4.31C9 22.142 8.105 23 7 23H4c-1.657 0-3-1.286-3-2.873z"
        fill={color}
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
        d="M1 19.127V9.04574C1 8.48327 1.27178 7.93787 1.76051 7.57621L10.372 1.20359C10.7388 0.932135 11.2612 0.932135 11.628 1.2036L20.2395 7.57621C20.7282 7.93787 21 8.48327 21 9.04574V19.127C21 20.1211 20.1458 21 19 21H16C15.4065 21 15 20.5499 15 20.0847V15.7752C15 14.6536 14.0634 13.8175 13 13.8175H9C7.93664 13.8175 7 14.6536 7 15.7752V20.0847C7 20.5499 6.59349 21 6 21H3C1.85423 21 1 20.1211 1 19.127Z"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconHome
