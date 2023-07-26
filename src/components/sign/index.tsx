import { Text, TouchableOpacity, View } from 'react-native'
import { styled } from 'styled-components'

const StyledButton = styled(TouchableOpacity)`
  background-color: blue;
  width: 90%;
  border-radius: 15;
  gap: 15;
  padding: 10;
`

export default function Signcont(props: { promptAsync: () => void }): JSX.Element {
  return (
    <View>
      <StyledButton onPress={(): void => props.promptAsync()}>
        <Text>Sign up with google</Text>
      </StyledButton>
    </View>
  )
}
