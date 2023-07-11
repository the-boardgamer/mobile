import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

const Demo = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <View>
      <Text>{t('demo.screen')}</Text>
    </View>
  )
}

export default Demo
