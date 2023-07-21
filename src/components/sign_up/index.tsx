import { Text, TouchableOpacity, View } from 'react-native'
import { styled } from 'styled-components'

const StyledButtton = styled(TouchableOpacity)`
  background-color: blue;
  width: 90%;
  border-radius: 15;
  gap: 15;
  padding: 10;
`

export default function SignUp(props: { promptAsync: () => void }): JSX.Element {
  return (
    <View>
      <StyledButtton onPress={(): void => props.promptAsync()}>
        <Text>Sign up with google</Text>
      </StyledButtton>
    </View>
  )
}
