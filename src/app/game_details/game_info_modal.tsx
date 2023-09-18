import React from 'react'

import * as Styled from './styles'
import Icon, { IconAge, IconBrain, IconDowntime, IconMeeple, IconTime } from '@components/icon'
import IconInformation from '@components/icon_information'
import Modal from '@components/modal'
import { useTheme } from '@contexts'

interface Props {
  id: string
  data: string
  label: string
}

const modalData = {
  age: {
    icon: <IconAge />,
    title: 'Age',
    description: 'Recommended age to play this game.',
    value: ['This game is recommended to kids ', ', or older.'],
  },
  time: {
    icon: <IconTime />,
    title: 'Time',
    description: 'Time spent by the players to play the boardgame.',
    value: ['This game takes about ', ' to be played.'],
  },
  complexity: {
    icon: <IconBrain />,
    title: 'Complexity Time',
    description: 'The time that takes for a player to understand the game and its rules.',
    value: ['This has a reating of ', ' in terms of complexity.'],
  },
  downtime: {
    icon: <IconDowntime />,
    title: 'Downtime',
    description: 'The time from that takes for a player to play his turn.',
    value: ['The idle time of players is about ', '.'],
  },
  players: {
    icon: <IconMeeple />,
    title: 'Players',
    description: 'The number of players that this game supports.',
    value: ['This game supports ', '.'],
  },
}

const GameInfoModal = (props: Props): JSX.Element => {
  const { data, id, label } = props
  const [visible, setVisible] = React.useState(false)
  const { theme } = useTheme()
  return (
    <>
      <IconInformation
        data={data}
        icon={modalData[id].icon}
        label={label}
        onPress={(): void => setVisible(true)}
      />
      <Modal.Root
        visible={visible}
        onClickOutside={(): void => setVisible(false)}
      >
        <Modal.Header
          closeButton
          handleClose={(): void => setVisible(false)}
        >
          <Modal.Row>
            <Icon
              icon={modalData[id].icon}
              color={theme.palette.foreground.default}
            />

            <Modal.Title numberOfLines={2}>{modalData[id].title}</Modal.Title>
          </Modal.Row>
        </Modal.Header>
        <Modal.Content>
          <Styled.GameInfoModalText>{modalData[id].description}</Styled.GameInfoModalText>
          <Styled.GameInfoModalText>
            {modalData[id].value[0]}
            <Styled.GameInfoModalTextHighlight>
              {data} {label}
            </Styled.GameInfoModalTextHighlight>
            {modalData[id].value[1]}
          </Styled.GameInfoModalText>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}

export default GameInfoModal
