import * as React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StyleSheet, Text, View } from 'react-native'
import SignUp from 'components/sign_up'
import * as Google from 'expo-auth-session/providers/google'
import { StatusBar } from 'expo-status-bar'
import * as WebBrowser from 'expo-web-browser'
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth'
import { styled } from 'styled-components/native'

import auth from './firebaseConfig'
import Demo from '@components/demo'

WebBrowser.maybeCompleteAuthSession()

const Title = styled.Text({
  fontSize: '24px',
  textAlign: 'center',
  color: '#bf4f74',
})

export default function App(): JSX.Element {
  const [userInfo, setUserInfo] = React.useState()
  const [request, response, promptAsync] = Google.useAuthRequest({})

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // check refresh token
        setUserInfo(user)
      } else {
        console.log('No Auth')
      }
    })

    return () => unsub()
  }, [])

  return (
    <View style={styles.container}>
      <Title>Open up App.tsx to start working on your app!</Title>
      <StatusBar style="auto" />
      <Demo />
      <SignUp promptAsync={promptAsync} />
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
