import { StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import { useAuth } from '@/contexts'

export default function SignIn(): JSX.Element {
  const { signIn } = useAuth()
  const { t } = useTranslation()

  return (
    <View style={styles.container}>
      <Text>{t('welcome')}</Text>
      <Text onPress={(): void => signIn()}>Sign In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
