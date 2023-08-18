import Calendar from '@components/icons/calendar'
import Home from '@components/icons/home'
import Person from '@components/icons/person'
import NavBar from '@components/nav_bar'

const _layout = (): JSX.Element => {
  const tabs = [
    {
      label: 'home',
      icon: <Home />,
    },
    {
      label: 'matches',
      icon: <Calendar />,
    },
    {
      label: 'profile',
      icon: <Person />,
    },
  ]

  return <NavBar tabs={tabs} />
}

export default _layout
