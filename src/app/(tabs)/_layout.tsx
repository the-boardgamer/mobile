import { Tabs } from 'expo-router'

const _layout = (): JSX.Element => (
  <Tabs screenOptions={{ headerShown: true }}>
    <Tabs.Screen
      name="(home)/index"
      options={{ tabBarLabel: 'Home' }}
    />
    <Tabs.Screen
      name="(matches)/index"
      options={{ tabBarLabel: 'Matches' }}
    />
    <Tabs.Screen
      name="(profile)/index"
      options={{ tabBarLabel: 'Profile' }}
    />
  </Tabs>
)

export default _layout
