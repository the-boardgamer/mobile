import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import changeLanguage from 'locales/changeLanguage'
import { useTranslation } from 'react-i18next'
// import { styled } from 'styled-components/native'
import Providers from 'utils'

import Demo from '@components/demo'

export default function App(): JSX.Element {
  const { t } = useTranslation()

  return (
    <Providers>
      <View style={styles.container}>
        <Text>{t('welcome')}</Text>
        <StatusBar style="auto" />
        <Demo />
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
