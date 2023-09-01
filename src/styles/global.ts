import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'styled-components/native'

export const Screen = styled(SafeAreaView)((props) => ({
  flex: 1,
  backgroundColor: props.theme.palette.background.default,
}))
