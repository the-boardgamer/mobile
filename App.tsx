import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { styled } from 'styled-components/native'

import Demo from '@components/demo'

const Title = styled.Text({
  fontSize: '24px',
  textAlign: 'center',
  color: '#bf4f74',
})

export default function App(): JSX.Element {
  const getData = (name: string): string | number => {
    if (name === 'James') return 'Hello ' + name
    return 90
  }
  return (
    <View style={styles.container}>
      <Title>Open up App.tsx to start working on your app!</Title>
      <StatusBar style="auto" />
      <Demo />
      <Text>{getData('James')}</Text>
    </View>
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
