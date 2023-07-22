import Svg, { Path } from 'react-native-svg'

export interface Props extends SVGSVGElement {
  filled?: boolean
  color?: string
  width?: number
  height?: number
  viewBox?: string
}

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
    >
      <Path
        d="M2 20.127V10.046c0-.563.272-1.108.76-1.47l8.612-6.372a1.07 1.07 0 011.256 0l8.611 6.372c.49.362.761.907.761 1.47v10.081c0 .994-.854 1.873-2 1.873h-3c-.593 0-1-.45-1-.915v-4.31c0-1.121-.937-1.957-2-1.957h-4c-1.063 0-2 .836-2 1.957v4.31C8 21.55 7.593 22 7 22H4c-1.146 0-2-.879-2-1.873z"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )

  return filled ? filledSvg : linedSvg
}

export default IconHome
