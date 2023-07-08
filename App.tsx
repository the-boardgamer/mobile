import { StyleSheet, View } from 'react-native'
import Contexts from 'contexts'
import { StatusBar } from 'expo-status-bar'

import Demo from '@components/demo'

export default function App(): JSX.Element {
  // const getData = (name: string): string | number => {
  //   if (name === 'James') return 'Hello ' + name
  //   return 90
  // }
  return (
    <Contexts>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Demo />
      </View>
    </Contexts>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
