import Svg, { Path, Rect } from 'react-native-svg'

import { defaultValues, Props } from '../types'

function IconCalendar(props: Props): JSX.Element {
  const { filled, color, ...rest } = { ...defaultValues, ...props }

  const filledSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M6 16.75H6.75V16V10.1C6.75 9.63056 6.36944 9.25 5.9 9.25H5.16667H4.6C4.13056 9.25 3.75 9.63056 3.75 10.1V16V16.75H4.5H5.16667H6Z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
      />
      <Path
        d="M12.5 16.95H13.45V16V5.1C13.45 4.5201 12.9799 4.05 12.4 4.05H11.5H10.6C10.0201 4.05 9.55 4.52011 9.55 5.1V16V16.95H10.5H11.5H12.5Z"
        fill={color}
        stroke={color}
        strokeWidth={1.9}
      />
      <Path
        d="M17.5976 16.0961L17.862 16.7979L18.5639 16.5335L19.495 16.1826L20.3326 15.867C20.7719 15.7015 20.9938 15.2112 20.8283 14.7719L18.1106 7.55948C17.9451 7.12019 17.4548 6.89826 17.0155 7.06378L16.1779 7.37938L15.3404 7.69498C14.9011 7.8605 14.6791 8.35081 14.8447 8.7901L17.5976 16.0961Z"
        fill={color}
        stroke={color}
        strokeWidth={1.5}
      />
      <Rect
        x={1}
        y={16}
        width={22}
        height={3}
        rx={1}
        fill={color}
      />
      <Rect
        x={18}
        y={18}
        width={2}
        height={3}
        rx={1}
        fill={color}
      />
      <Rect
        x={4}
        y={18}
        width={2}
        height={3}
        rx={1}
        fill={color}
      />
    </Svg>
  )

  const linedSvg = (
    <Svg
      fill="none"
      {...rest}
    >
      <Path
        d="M6 16.75H6.75V16V13V10.1C6.75 9.63056 6.36944 9.25 5.9 9.25H5.16667H4.6C4.13056 9.25 3.75 9.63056 3.75 10.1V16V16.75H4.5H5.16667H6Z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Path
        d="M12.5 16.95H13.45V16V5.1C13.45 4.5201 12.9799 4.05 12.4 4.05H11.5H10.6C10.0201 4.05 9.55 4.52011 9.55 5.1V16V16.95H10.5H11.5H12.5Z"
        stroke={color}
        strokeWidth={1.9}
      />
      <Path
        d="M17.5976 16.0961L17.862 16.7979L18.5639 16.5335L19.495 16.1826L20.3326 15.867C20.7719 15.7015 20.9938 15.2112 20.8283 14.7719L18.1106 7.55948C17.9451 7.12019 17.4548 6.89826 17.0155 7.06378L16.1779 7.37938L15.3404 7.69498C14.9011 7.8605 14.6791 8.35081 14.8447 8.7901L17.5976 16.0961Z"
        stroke={color}
        strokeWidth={1.5}
      />
      <Rect
        x={1}
        y={16}
        width={22}
        height={3}
        rx={1}
        fill={color}
      />
      <Rect
        x={18}
        y={18}
        width={2}
        height={3}
        rx={1}
        fill={color}
      />
      <Rect
        x={4}
        y={18}
        width={2}
        height={3}
        rx={1}
        fill={color}
      />
    </Svg>
  )
  return filled ? filledSvg : linedSvg
}

export default IconCalendar
