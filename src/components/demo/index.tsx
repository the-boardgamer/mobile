import { View } from 'react-native'
import { ThemeType } from 'contexts/theme/types'
import { styled } from 'styled-components/native'

type TitleProps = {
  theme: ThemeType
}

const Title = styled.Text<TitleProps>((props) => ({
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
