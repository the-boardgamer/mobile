import * as React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
  User,
} from 'firebase/auth'
import changeLanguage from 'locales/changeLanguage'
import { useTranslation } from 'react-i18next'
// import { styled } from 'styled-components/native'
import Providers from 'utils'

import { auth } from './firebaseConfig'
import Demo from '@components/demo'
import { ANDROID_CLIENT_ID, EXPO_CLIENT_ID, IOS_CLIENT_ID } from '@env'

WebBrowser.maybeCompleteAuthSession()

export default function App(): JSX.Element {
  const { t } = useTranslation()
  const [userInfo, setUserInfo] = React.useState<User>()
  const [loading, setLoading] = React.useState(false)
  const [_, response, promptAsync] = Google.useAuthRequest({
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
  })

  async function checkLocalUser(): Promise<void> {
    try {
      setLoading(true)

      const userJSON = await AsyncStorage.getItem('@user')
      const userData = userJSON ? JSON.parse(userJSON) : null
      console.log('local storage: ', userData)
      setUserInfo(userData)
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message)
      }
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
    <Providers>
      <View style={styles.container}>
        <Text>{t('welcome')}</Text>
        <StatusBar style="auto" />
        <Demo />
        {userInfo ? <TestAuth /> : <SignUp promptAsync={promptAsync} />}

        <Button
          title="Sign Out"
          onPress={async (): Promise<void> => await signOut(auth)}
        />

        <Button
          title="Clear LOCAL STORAGE"
          onPress={(): void => {
            AsyncStorage.clear()
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={(): void => changeLanguage('en')}
        >
          <Text>EN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={(): void => changeLanguage('pt')}
        >
          <Text>PT</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: 'red',
    padding: 12,
    margin: 16,
    borderRadius: 12,
  },
})
