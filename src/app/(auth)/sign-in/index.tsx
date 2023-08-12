import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useTranslation } from 'react-i18next'

import IconInformation from '@components/icon_information'
import { IconStar } from '@components/icons'
import { useTheme } from '@contexts'
import { useAuth } from '@contexts'
import changeLanguage from '@locales/changeLanguage'

export default function SignIn(): JSX.Element {
  const { signIn } = useAuth()
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <View style={{ paddingTop: 200, backgroundColor: theme.palette.background.default, flex: 1 }}>
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

      <View style={{ flexDirection: 'row', padding: 20, gap: 20 }}>
        <IconInformation
          onPress={(): void => console.log('clicou')}
          icon={<IconStar />}
          data="4 hdsjakd jd,sa jdklsaj dhsajkd '"
          label="downtime"
        />
        <IconInformation
          icon={<IconStar />}
          data="4'"
          label="downtime de tempo do coisinha"
        />
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
