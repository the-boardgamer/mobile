import * as React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import SignUp from 'components/sign_up'
import TestAuth from 'components/test_auth'
import * as Google from 'expo-auth-session/providers/google'
import { StatusBar } from 'expo-status-bar'
import * as WebBrowser from 'expo-web-browser'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut,
} from 'firebase/auth'
import { styled } from 'styled-components/native'

import { auth } from './firebaseConfig'
import Demo from '@components/demo'

WebBrowser.maybeCompleteAuthSession()

const Title = styled.Text({
  fontSize: '24px',
  textAlign: 'center',
  color: '#bf4f74',
})

export default function App(): JSX.Element {
  const [userInfo, setUserInfo] = React.useState()
  const [loading, setLoading] = React.useState(false)
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: process.env.IOS_CLIENT_ID,
    androidClientId: process.env.ANDROID_CLIENT_ID,
    expoClientId: process.env.EXPO_CLIENT_ID,
  })

  async function checkLocalUser(): void {
    try {
      setLoading(true)

      const userJSON = await AsyncStorage.getItem('@user')
      const userData = userJSON ? JSON.parse(userJSON) : null
      console.log('local storage: ', userData)
      setUserInfo(userData)
    } catch (e) {
      console.log(e.message)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  React.useEffect(() => {
    checkLocalUser()

    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // check refresh token
        setUserInfo(user)
        // check token
        await AsyncStorage.setItem('@user', JSON.stringify(user))
      } else {
        console.log('Not Authenticated')
      }
    })

    return () => unsub()
  }, [])

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )

  return (
    <View style={styles.container}>
      <Title>Open up App.tsx to start working on your app!</Title>
      <StatusBar style="auto" />
      <Demo />
      {userInfo ? <TestAuth /> : <SignUp promptAsync={promptAsync} />}

      <Button
        title="Sign Out"
        onPress={async () => await signOut(auth)}
      />

      <Button
        title="Clear LOCAL STORAGE"
        onPress={() => {
          AsyncStorage.clear()
        }}
      />
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
