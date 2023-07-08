import { View } from 'react-native'
import { ThemeType } from 'contexts/theme/types'
import { styled } from 'styled-components/native'

// FIX

const Title = styled.Text((props: { theme: ThemeType }) => ({
  fontSize: '24px',
  textAlign: 'center',
  background: props.theme.palette.background.default,
  color: props.theme.palette.foreground.default,
}))

const Demo = (): JSX.Element => (
  <View>
    <Title>Demo</Title>
  </View>
)

export default Demo
