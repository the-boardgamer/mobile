import BottomTabs from '@components/bottom_tabs'
import Calendar from '@components/icons/calendar'
import Home from '@components/icons/home'
import Person from '@components/icons/person'

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

  return <BottomTabs tabs={tabs} />
}

export default _layout
