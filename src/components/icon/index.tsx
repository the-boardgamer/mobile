import React from 'react'
import { Svg } from 'react-native-svg'

export interface Props extends Partial<Svg> {
  color?: string
  filled?: boolean
  height?: number
  icon: JSX.Element
  width?: number
}

export const defaultValues: Props = {
  icon: <Svg />,
  filled: false,
  color: '#31213B',
  viewBox: '0 0 24 24',
  width: 24,
  height: 24,
}

export default function Icon(props: Props): JSX.Element {
  const { icon, ...rest } = { ...defaultValues, ...props }
  return React.cloneElement(icon, { ...rest })
}

export { default as IconAge } from './age'
export { default as IconApple } from './apple'
export { default as IconArrow } from './arrow'
export { default as IconBrain } from './brain'
export { default as IconCalendar } from './calendar'
export { default as IconCompass } from './compass'
export { default as IconDowntime } from './downtime'
export { default as IconFacebook } from './facebook'
export { default as IconGoogle } from './google'
export { default as IconGrid } from './grid'
export { default as IconHome } from './home'
export { default as IconList } from './list'
export { default as IconMeeple } from './meeple'
export { default as IconPerson } from './person'
export { default as IconSearch } from './search'
export { default as IconSetup } from './setup'
export { default as IconShelf } from './shelf'
export { default as IconStar } from './star'
export { default as IconTime } from './time'
export { default as IconX } from './x'
