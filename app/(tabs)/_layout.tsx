import { Tabs } from 'expo-router'

const Layout = (): JSX.Element => (
  <Tabs>
    <Tabs.Screen
      name="home/index"
      options={{ tabBarLabel: 'Home' }}
    />
    <Tabs.Screen
      name="matches/index"
      options={{ tabBarLabel: 'Matches' }}
    />
    <Tabs.Screen
      name="profile/index"
      options={{ tabBarLabel: 'Profile' }}
    />
  </Tabs>
)

export default Layout
