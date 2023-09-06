import Calendar from '@components/icon/calendar'
import Home from '@components/icon/home'
import Person from '@components/icon/person'
import NavBar from '@components/nav_bar'

const _layout = (): JSX.Element => {
  const tabs = {
    home: {
      label: 'home',
      icon: <Home />,
    },
    matches: {
      label: 'matches',
      icon: <Calendar />,
    },
    profile: {
      label: 'profile',
      icon: <Person />,
    },
  }

  return <NavBar tabs={tabs} />
}

export default _layout
