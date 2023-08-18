import { Text, View } from 'react-native'

import { useTheme } from '@contexts'

const Home = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <View style={{ backgroundColor: theme.palette.background.default, flex: 1 }}>
      <Text>Home</Text>
    </View>
  )
}

export default Home
