import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'

import { useAuth } from '@/contexts'
import changeLanguage from '@/locales/changeLanguage'

export default function SignIn(): JSX.Element {
  const { signIn } = useAuth()
  const { t } = useTranslation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text>{t('welcome')}</Text>
        <StatusBar style="auto" />
        <Text>{t('description')}</Text>
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

        <Text onPress={(): void => signIn()}>Sign In</Text>
      </View>
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
  button: {
    backgroundColor: 'red',
    padding: 12,
    margin: 16,
    borderRadius: 12,
  },
})
