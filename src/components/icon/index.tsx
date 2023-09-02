import React from 'react'
import { Svg } from 'react-native-svg'

export interface Props extends Partial<Svg> {
  filled?: boolean
  color?: string
  icon: JSX.Element
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

export { default as IconArrow } from './arrow'
export { default as IconCalendar } from './calendar'
export { default as IconGrid } from './grid'
export { default as IconHome } from './home'
export { default as IconList } from './list'
export { default as IconPerson } from './person'
export { default as IconSearch } from './search'
export { default as IconStar } from './star'
export { default as Compass } from './compass'
export { default as Shelf } from './shelf'
