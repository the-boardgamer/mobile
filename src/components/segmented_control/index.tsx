import { useState } from 'react'
import * as SegmentedControl from '@react-native-segmented-control/segmented-control'
import { useTheme } from 'styled-components'

import { styledActiveFont, styledFont, styledSegmented } from './styles'

export interface Props {
  //   color?: 'primary' | 'secondary' | 'background'
  //   icon?: JSX.Element
  //   label?: string
  segments: string[]
  onChangeSegment?: (label: string, index: number) => void
  //   variant?: 'filled' | 'shade' | 'outlined' | 'ghost'
}

const defaultValues: Props = {
  segments: undefined,
  onChangeSegment: undefined,
}

export default function SegmentedControlTest(props: Props): JSX.Element {
  const { onChangeSegment, segments, ...rest } = { ...defaultValues, ...props }
  const [index, setIndex] = useState(0)

  const theme = useTheme()

  return (
    <SegmentedControl.default
      values={segments}
      selectedIndex={index}
      backgroundColor={theme.palette.background.variant}
      fontStyle={styledFont(theme)}
      activeFontStyle={styledActiveFont(theme)}
      tintColor={theme.palette.primary.default}
      onChange={(event): void => {
        const currentIndex = event.nativeEvent.selectedSegmentIndex
        setIndex(currentIndex)
        onChangeSegment(segments[currentIndex], currentIndex)
      }}
      style={styledSegmented(theme)}
      {...rest}
    />
  )
}
