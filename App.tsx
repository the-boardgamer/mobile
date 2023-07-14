import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Providers from 'utils'

import Demo from '@components/demo'

export default function App(): JSX.Element {
  // const getData = (name: string): string | number => {
  //   if (name === 'James') return 'Hello ' + name
  //   return 90
  // }
  return (
    <Providers>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Demo />
      </View>
    </Providers>
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
