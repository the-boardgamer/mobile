import { Text, TouchableOpacity, View } from 'react-native'

export default function SignUp({ promptAsync }): JSX.Element {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          width: '90%',
          borderRadius: 15,
          gap: 15,
          padding: 10,
        }}
        onPress={(): void => promptAsync()}
      >
        <Text>Sign up with google</Text>
      </TouchableOpacity>
    </View>
  )
}
