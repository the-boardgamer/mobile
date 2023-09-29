import { ViewProps } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'styled-components/native'

export const Screen = styled(SafeAreaView)((props) => ({
  flex: 1,
  backgroundColor: props.theme.palette.background.default,
}))

interface SeparatorProps extends Omit<ViewProps, 'height' | 'width'> {
  width: string
  height: string
}

export const Separator = styled.View<SeparatorProps>((props) => ({
  width: props.width ?? '20px',
  height: props.height ?? '20px',
}))
